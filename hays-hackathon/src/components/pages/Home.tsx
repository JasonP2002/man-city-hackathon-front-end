import React from "react";
import Layout from "../layout/layout";

import Field from '../home/Field';
import Bench from '../home/Bench';
import Available from '../home/Available';

import { DndContext } from '@dnd-kit/core';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <Layout>
      {/*Must wrap all drag-and-drop components in a DndContext*/}
      <DndContext>
        <h1>Home</h1>
        <Field />
        <Bench />
        <Available />
      </DndContext>
    </Layout>
  );
};
export default HomePage;
