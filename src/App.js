import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";

import Button from "./components/Buttons/Button/Button.jsx";

function App() {
  const ev = (x) => {
    console.log(x);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
      </Routes>
      <Button
        text="hello there"
        color="yellow"
        eventListener={() => {
          ev("helo");
        }}
      />
      <Button text="hello there hello there hello there" color="blue" />
    </>
  );
}

export default App;
