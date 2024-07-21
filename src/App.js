import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";

import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button color="white" text="hello" />
      <Button color="blue" text="hello" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
      </Routes>
    </>
  );
}

export default App;
