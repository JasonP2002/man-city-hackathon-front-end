import React from "react";
import { useLocation } from "react-router";
import Layout from "../layout/layout";

export interface ISelectionPageProps {}
const SelectionPage: React.FunctionComponent<ISelectionPageProps> = (props) => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Layout>
      <div>selection</div>
    </Layout>
  );
};
export default SelectionPage;
