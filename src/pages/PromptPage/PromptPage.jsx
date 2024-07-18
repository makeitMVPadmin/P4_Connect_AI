import "./PromptPage.scss";
import QuizPage from "../QuizPage/QuizPage";

const PromptPage = () => {
  return (
    <div className="promptpage-container">
      <div className="promptpage">
        I am a prompt page
        <p className="promptpage">Hello</p>
        <QuizPage />
      </div>
    </div>
  );
};

export default PromptPage;
