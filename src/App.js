import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import BackEndTest from "./backend/Backend.jsx";
import AiBackendTest from "./backend/AiBackendTest.js";
import LoadingPage from "./components/LoadingPage/LoadingPage.jsx";
import TestPage from "./pages/TestPage/TestPage.jsx";
import ChallengePage from "./components/ChallengePage/ChallengePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/test" element={<BackEndTest />} />
        <Route path="/aitest" element={<AiBackendTest />} />
        <Route path="/Testa" element={<LoadingPage />} />
        {/* <Route path="/TestPage" element={<ChallengeCard />} /> */}
        <Route path="/TestPage" element={<ChallengePage />} />

      </Routes>
    </>
  );
}

export default App;
