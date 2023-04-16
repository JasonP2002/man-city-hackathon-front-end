import { useState } from 'react'
import Layout from "../layout/layout";

import ScoreBoard from '../matchpage/ScoreBoard';
import TeamEnergy from '../matchpage/TeamEnergy';
import Field from '../matchpage/Field';
import Bench from '../matchpage/Bench';
import Available from '../matchpage/Available';

import { DndContext } from '@dnd-kit/core';

import Player from '../matchpage/Player';

const num_players = 11;

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

  return (
    <Layout>
      <div className="match-page" >
        {/*Must wrap all drag-and-drop components in a DndContext*/}
        <DndContext onDragEnd={handleDragEnd} >
          <ScoreBoard />
          
          <div className="match-page-center">
            <Field key='field-droppable' id='field-droppable' players={players} dropZones={dropZones} />

            <div className="match-details">
              <TeamEnergy />
              <Bench key='bench-droppable' id='bench-droppable' >
                <h2>Bench</h2>
                {players.filter((_, i) => dropZones[i] === 'bench-droppable')}
              </Bench>
            </div>
          </div>

          <Available key='avail-droppable' id='avail-droppable'>
            <h2>Players</h2>
            {players.filter((_, i) => dropZones[i] === 'avail-droppable')}
          </Available>
        </DndContext>
      </div>
    </Layout>
  );
};

export default MatchPage;