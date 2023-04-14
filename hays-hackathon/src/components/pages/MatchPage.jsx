import { useState } from 'react'
import Layout from "../layout/layout";

import Field from '../matchpage/Field';
import Bench from '../matchpage/Bench';
import Available from '../matchpage/Available';

import { DndContext } from '@dnd-kit/core';

import Player from '../matchpage/Player';


const MatchPage = (props) => {
  const [parent, setParent] = useState(null);
  const testPlayer = (
    <Player id="player-draggable">
      <p>Player</p>
    </Player>
  )

  function handleDragEnd(event) {
    const {over} = event;
    setParent(over ? over.id : null);
  }

  return (
    <Layout>
      <div className="match-page" >
        {/*Must wrap all drag-and-drop components in a DndContext*/}
        <DndContext onDragEnd={handleDragEnd} >
          <h1>Match</h1>

          <Field key='field-droppable' id='field-droppable'>
            <h2>Field</h2>
            {parent === 'field-droppable' ? testPlayer : <></>}
          </Field>

          <Bench key='bench-droppable' id='bench-droppable'>
            <h2>Bench</h2>
            {parent === 'bench-droppable' ? testPlayer : <></>}
          </Bench>

          <Available key='avail-droppable' id='avail-droppable'>
            <h2>Players</h2>
            {parent === null || parent === 'avail-droppable' ? testPlayer : null}
          </Available>

        </DndContext>
      </div>
    </Layout>
  );
};

export default MatchPage;