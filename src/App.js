import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageProvider } from "./contexts/PageContext.js";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import BackEndTest from "./backend/Backend.jsx";
import AiBackendTest from "./backend/AiBackendTest.js";
import { ChallengeDetails } from "./pages/ChallengeDetails/ChallengeDetails.jsx";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import ChallengePage from "./components/P5AP_ChallengePage/ChallengePage.jsx";
import TaskPageDetailedInstructions from "./components/TaskPageDetailedInstructions/TaskPageDetailedInstructions.jsx";

function App() {
  return (
    <PageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/challengePage" element={<ChallengePage />} />
        <Route path="/test" element={<BackEndTest />} />
        <Route path="/aitest" element={<AiBackendTest />} />
        <Route path="/challenge/:challengeId" element={<ChallengeDetails />} />
        <Route path="/Testa" element={<LoadingPage />} />
        <Route path="/details" element={<TaskPageDetailedInstructions id="9chM02f9llGdd6ZPj1CO"/>}/>
      </Routes>
    </PageProvider>
  );
}

export default App;
