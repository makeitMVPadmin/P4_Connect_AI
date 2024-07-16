import { Routes, Route } from "react-router-dom";
import PromptPage from "./pages/PromptPage/PromptPage";

function App() {
  return (
    <Routes>
      <Route path="/prompt" element={<PromptPage />} />
    </Routes>
  );
}

export default App;
