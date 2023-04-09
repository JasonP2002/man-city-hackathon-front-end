import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home";
import SelectionPage from "./components/pages/SelectionPage";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="selection" element={<SelectionPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Application;
