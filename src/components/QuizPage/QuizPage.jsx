import "./QuizPage.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import React, { useState } from "react";
import QuizQuestions from "../../components/QuizQuestions/QuizQuestions";

const QuizPage = ({ setCurrentPage }) => {
  const step = 1;
  const [progress, setProgress] = useState(0);
  const onProgressChange = (answeredQuestionsCount) => {
    //console.log("Answered Questions Count:", answeredQuestionsCount);
    // Update progress based on the number of answered questions
    setProgress(answeredQuestionsCount);
  };

  return (
    <div className="quizpage">
      <div className="quizpage__side-area">
        <ProgressBar step={progress} />
      </div>
      <div className="quizpage__main-container">
        <div className="quizpage__main">
          <QuizQuestions
            setCurrentPage={setCurrentPage}
            onProgressChange={onProgressChange}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
