import React from "react";
import Layout from "../layout/layout";

import Field from '../home/Field';
import Bench from '../home/Bench';
import Available from '../home/Available';

import { DndContext } from '@dnd-kit/core';

export interface IMatchPageProps {}

const MatchPage: React.FunctionComponent<IMatchPageProps> = (props) => {
  return (
    <Layout>
      {/*Must wrap all drag-and-drop components in a DndContext*/}
      <DndContext>
        <h1>Match</h1>
        <Field />
        <Bench />
        <Available />
      </DndContext>
    </Layout>
  );
};
export default MatchPage;
