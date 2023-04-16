import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home";
import SelectionPage from "./components/pages/SelectionPage";
import ErrorPage from "./components/pages/errorPage";
import MatchPage from "./components/pages/MatchPage";
import "./Application.css";
import ArchivePage from "./components/pages/archivePage";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="selection" element={<SelectionPage />} />
        <Route path="match" element={<MatchPage />} />
        <Route path="archive" element={<ArchivePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Application;
