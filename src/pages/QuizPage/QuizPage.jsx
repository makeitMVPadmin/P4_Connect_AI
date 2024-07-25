import "./QuizPage.scss";
import { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import MatchedUsers from "../../components/MatchedUsers/MatchedUsers";
import React from "react";
import QuizQuestions from "../../components/QuizQuestions/QuizQuestions";
const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleProgressChange = (progress) => {
    setCurrentStep(progress);
  };

  return (
    <div className="quizpage">
      <div className="quizpage__container">
        <div className="quizpage__side-area">
        <ProgressBar step={currentStep} /> 
        </div>
        <div className="quizpage__main">
          <QuizQuestions onProgressChange={handleProgressChange} />
          <MatchedUsers />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
