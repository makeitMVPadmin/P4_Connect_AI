import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import TestPage from "./pages/TestPage/TestPage";
import QuizPage from "./pages/QuizPage/QuizPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/test" element={<TestPage />} />

      </Routes>
      <QuizPage />
    </>
  );
}

export default App;
