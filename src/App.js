import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import Dropdown from "./components/Dropdown/Dropdown.jsx";
import DropdownCheckbox from "./components/DropdownCheckbox/DropdownCheckbox.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
      </Routes>
      <Dropdown />
      <DropdownCheckbox/>
      
    </>
  );
}

export default App;
