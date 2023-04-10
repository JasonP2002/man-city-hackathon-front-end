import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home";
import SelectionPage from "./components/pages/SelectionPage";
import ErrorPage from "./components/pages/errorPage";
import MatchPage from "./components/pages/MatchPage";
import "./Application.css";
import { player } from "./services";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  const { getAllPlayers, getPlayerById } = player();

  useEffect(() => {
    requests();
    async function requests() {
      console.log("all", await getAllPlayers());
      console.log("id", await getPlayerById(4649));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="selection" element={<SelectionPage />} />
        <Route path="match" element={<MatchPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Application;
