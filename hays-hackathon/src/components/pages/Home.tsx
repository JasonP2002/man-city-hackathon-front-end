import React from "react";
import Layout from "../layout/layout";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <Layout>
      <div>home</div>
    </Layout>
  );
};
export default HomePage;
