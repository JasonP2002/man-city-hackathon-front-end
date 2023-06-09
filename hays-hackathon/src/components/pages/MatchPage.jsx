import { useState, useEffect, useCallback } from 'react'
import Layout from "../layout/layout";

import ScoreBoard from '../matchpage/ScoreBoard';
import TeamEnergy from '../matchpage/TeamEnergy';
import Field from '../matchpage/Field';
import Bench from '../matchpage/Bench';
import Available from '../matchpage/Available';
import Timer from '../layout/timer';

import { DndContext } from '@dnd-kit/core';

import Player from '../matchpage/Player';
import { useLocation } from 'react-router-dom';

let num_players = 0

const generatePlayers = () => {
  let players = []
  let id=''
  for (let i = 0; i < num_players; i++) {
    id = 'player-draggable:'+i.toString()
    players.push(<Player key={id} id={id}>Player {i+1}</Player>)
  }
  return players;
};

const generateDropZones = () => {
  let dropZones = []
  for (let i = 0; i < num_players; i++) {
    dropZones.push('avail-droppable')
  }
  return dropZones;
}

const MatchPage = (props) => {
  const [players, setPlayers] = useState(generatePlayers());
  const [dropZones, setDropZones] = useState(generateDropZones());
  const [statee, setStatee] = useState(useLocation().state)
 
  const [form, setForm] = useState(statee.form.value);
  var index = statee.teams.findIndex(item => item.name === statee.opposition.value )
  const [opp, setOpp] = useState(statee.teams[index].abrv);
  const [numberOfPlayers, setNumberOfPlayers] = useState(statee.num_players);
  const [homescore, setHomeScore] = useState(0);
  const [awayscore, setAwayScore] = useState(0);
  const [maxScore, setMaxScore] = useState(10);
  const [awayScoreDelay, setAwayScoreDelay] = useState(32000); // Initial delay for away score increment
const [counter, setCounter] = useState(0);
  num_players = numberOfPlayers

  function handleDragEnd(event) {
    const {over, active} = event;
    if (over && active) { //If draggable dropped into droppable

      let newDropZones = dropZones
      //Check if player dropped over a position
      const droppable = (over.id).split('-')

      if (droppable[0] === 'position') {
        const positionFill = checkPositions(droppable[1])
        //If position is already filled, send player in position back to available droppable
        if (positionFill !== -1) {
          newDropZones = dropZones.slice(0, positionFill).concat(['avail-droppable'].concat(dropZones.slice(positionFill+1, dropZones.length)))
        }
      }

      const index = parseInt((active.id).split(':')[1]); //Get id of draggable
      //Change dropzone for dropped draggable
      setDropZones(newDropZones.slice(0, index).concat([over.id].concat(newDropZones.slice(index+1, newDropZones.length))));
    }
  }

  //Checks if certain position is already filled
  const checkPositions= (positionid) => {
    for (let i = 0; i < dropZones.length; i++) {
      if (dropZones[i].split('-')[1] === positionid) {
        return i;
      } 
    }
    return -1;
  }


const incrementHomeScore = useCallback(() => {
  setHomeScore(prevScore => {
    if (prevScore < maxScore) {
      return prevScore + 1;
    }
    return prevScore;
  });
}, [maxScore]);

const incrementAwayScore = useCallback(() => {
  setAwayScore(prevScore => {
    if (prevScore < maxScore) {
      return prevScore + 1;
    }
    return prevScore;
  });
}, [maxScore]);

useEffect(() => {
  const homeScoreIntervalId = setInterval(incrementHomeScore, 60000);

  const awayScoreIntervalId = setInterval(() => {
    setCounter(prevCounter => prevCounter + 1);

    setAwayScoreDelay(prevDelay => {
      if (counter % 5 === 0) {
        return prevDelay * 2; // Double the delay
      }
      return prevDelay;
    });

    incrementAwayScore(); // Call the away score increment

  }, awayScoreDelay);

  return () => {
    clearInterval(homeScoreIntervalId);
    clearInterval(awayScoreIntervalId);
  };
}, [incrementHomeScore, incrementAwayScore, awayScoreDelay, counter]);

  return (
    <Layout>
      <div className="match-page" >
        <Timer/>
        {/*Must wrap all drag-and-drop components in a DndContext*/}
        <DndContext onDragEnd={handleDragEnd} >
          <ScoreBoard hometeam={"MCI"} homescore={homescore} awayteam={opp} awayscore={awayscore}/>
          
          <div className="match-page-center">
            <Field key='field-droppable' id='field-droppable' players={players} dropZones={dropZones} form={form}/>

            <div className="match-details">
              <TeamEnergy energy={10}/>
              <Bench key='bench-droppable' id='bench-droppable' >
                <h2>Bench</h2>
                {players.filter((_, i) => dropZones[i] === 'bench-droppable')}
              </Bench>
              <Available key='avail-droppable' id='avail-droppable'>
                <h2>Players</h2>
                {players.filter((_, i) => dropZones[i] === 'avail-droppable')}
              </Available>
            </div>
          </div>

        </DndContext>
      </div>
    </Layout>
  );
};

export default MatchPage;