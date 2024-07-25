import "./QuizPage.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import MatchedUsers from "../../components/MatchedUsers/MatchedUsers";
import React from "react";
import QuizQuestions from "../../components/QuizQuestions/QuizQuestions";
const QuizPage = () => {
  return (
    <div className="quizpage">
      <div className="quizpage__side-area">
        <ProgressBar />
      </div>
      <div className="quizpage__main-container">
        <div className="quizpage__main">
          <QuizQuestions />
          <MatchedUsers />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
