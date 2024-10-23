import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import BackEndTest from "./backend/Backend.jsx";
import AiBackendTest from "./backend/AiBackendTest.js";
import LoadingPage from "./components/LoadingPage/LoadingPage.jsx";
import TestPage from "./pages/TestPage/TestPage.jsx";
import ChallengeCard from "./components/ChallengeCard/ChallengeCard.jsx";
import PairupBoard from "./pages/P5AP_PairupBoard/PairupBoard.jsx"
import PhotoCard from "./components/P5AP_PhotoCard/photocard.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/test" element={<BackEndTest />} />
        <Route path="/aitest" element={<AiBackendTest />} />
        <Route path="/Testa" element={<LoadingPage />} />
        <Route path="/TestPage" element={<ChallengeCard/>}/>

        <Route path="/PairupBoard" element={<PairupBoard/>}/>
        <Route path="/Photocard" element={<PhotoCard/>}/>



      </Routes>
    </>
  );
}

export default App;
