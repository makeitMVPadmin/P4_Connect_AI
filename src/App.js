import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import BackEndTest from "./backend/Backend.jsx";
import AiBackendTest from "./backend/AiBackendTest.js";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";
import { PageProvider } from "./contexts/PageContext";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/prompt"
          element={
            <PageProvider>
              <PromptPage />
            </PageProvider>
          }
        />
        <Route path="/test" element={<BackEndTest />} />
        <Route path="/aitest" element={<AiBackendTest />} />
        <Route path="/Testa" element={<LoadingPage />} />
      </Routes>
    </>
  );
}

export default App;
