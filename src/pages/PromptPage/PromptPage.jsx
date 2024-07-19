import "./PromptPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import QuizPage from "../QuizPage/QuizPage";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";

const PromptPage = () => {
  return (
    <div className="promptpage-container">
      <div className="promptpage">
        I am a prompt page
        <Dropdown />
        <DropdownCheckbox /> 
        <QuizPage />
      </div>
    </div>
  );
};

export default PromptPage;
