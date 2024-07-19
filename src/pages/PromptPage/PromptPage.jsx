import "./PromptPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import QuizPage from "../QuizPage/QuizPage";

const PromptPage = () => {
  return (
    <div className="promptpage-container">
      <div className="promptpage">
        I am a prompt page
        <Dropdown />
        {/* once PromptPage is setup, the QuizPage can be conditionally shown */}
        <QuizPage />
      </div>
    </div>
  );
};

export default PromptPage;
