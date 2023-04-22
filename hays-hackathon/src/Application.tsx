import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home";
import ErrorPage from "./components/pages/errorPage";
import "./Application.css";
import ArchivePage from "./components/pages/archivePage";
import React from "react";
import MatchPage from "./components/pages/MatchPage";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="match" element={<MatchPage />} />
        <Route path="archive" element={<ArchivePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Application;
