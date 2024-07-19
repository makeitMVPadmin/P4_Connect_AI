import "./QuizPage.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const QuizPage = () => {
  return (
    <div className="quizpage">
      <div className="quizpage__container">
        <div className="quizpage__side-area">
          <ProgressBar />
        </div>
        <div className="quizpage__main"></div>
      </div>
    </div>
  );
};

export default QuizPage;
