import { useState } from 'react'
import Layout from "../layout/layout";

import Field from '../matchpage/Field';
import Bench from '../matchpage/Bench';
import Available from '../matchpage/Available';

import { DndContext } from '@dnd-kit/core';

import Player from '../matchpage/Player';

const num_players = 4;

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
      const index = parseInt((active.id).split(':')[1]); //Get id of draggable
      //Change dropzone for dropped draggable
      setDropZones(dropZones.slice(0, index).concat([over.id].concat(dropZones.slice(index+1, dropZones.length))));
    }
  }

  return (
    <Layout>
      <div className="match-page" >
        {/*Must wrap all drag-and-drop components in a DndContext*/}
        <DndContext onDragEnd={handleDragEnd} >
          <h1>Match</h1>

          <Field key='field-droppable' id='field-droppable'>
            <h2>Field</h2>
            {players.filter((_, i) => dropZones[i] === 'field-droppable')}
          </Field>

          <Bench key='bench-droppable' id='bench-droppable'>
            <h2>Bench</h2>
            {players.filter((_, i) => dropZones[i] === 'bench-droppable')}
          </Bench>

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