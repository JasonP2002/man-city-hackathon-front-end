import React from "react";
import Layout from "../layout/layout";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <Layout>
        <h1>Home</h1>
    </Layout>
  );
};
export default HomePage;
