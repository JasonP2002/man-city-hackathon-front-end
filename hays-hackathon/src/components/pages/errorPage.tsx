import React from "react";
import Layout from "../layout/layout";

export interface IErrorPageProps {}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = (props) => {
  return (
    <Layout>
      <div>
        <h2>404: page not found</h2>
      </div>
    </Layout>
  );
};
export default ErrorPage;
