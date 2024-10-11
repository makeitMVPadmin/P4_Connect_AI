import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import BackEndTest from "./pages/BackEnd/Backend.jsx";
import AiBackendTest from "./pages/BackEnd/AiBackendTest.js";
import LoadingPage from "./components/LoadingPage/LoadingPage.jsx";
import { ChallengeDetails } from "./pages/ChallengeDetails/ChallengeDetails.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/test" element={<BackEndTest />} />
        <Route path="/aitest" element={<AiBackendTest />} />
        <Route path="/Testa" element={<LoadingPage/>}/>
        <Route path="/challenge/:challengeId" element={<ChallengeDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
