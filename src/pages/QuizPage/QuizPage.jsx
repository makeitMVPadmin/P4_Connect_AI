import "./QuizPage.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import React, { useState, Suspense } from "react";
import QuizQuestions from "../../components/QuizQuestions/QuizQuestions";
import LoadingPage from "../LoadingPage/LoadingPage";
import NoMatch from "../../components/NoMatch/NoMatch";
import NewMatchedUsers from "../../components/NewMatchedUsers/NewMatchedUsers";

const QuizPage = ({ currentPage, setCurrentPage }) => {
  // ADD match response prop if match algo happens after sending questions

  const [progress, setProgress] = useState(() => {
    const savedProgress = sessionStorage.getItem("progress");
    return savedProgress ? Number(savedProgress) : 0;
  });
  const onProgressChange = (answeredQuestionsCount) => {
    setProgress(answeredQuestionsCount);
    sessionStorage.setItem("progress", answeredQuestionsCount);
  };

  return (
    <div className="quizpage">
      <div className="quizpage__side-area">
        <ProgressBar step={progress} currentPage={currentPage} />
      </div>
      <div className="quizpage__main-container">
        <div className="quizpage__main">
          {currentPage === "quiz" && (
            <QuizQuestions
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              onProgressChange={onProgressChange}
            />
          )}
          {currentPage === "new-match" && (
            <NewMatchedUsers
              handleBackToQuiz={() => setCurrentPage("quiz")}
              handleGoToGoal={() => setCurrentPage("loading1")}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
          {currentPage === "no-match" && (
            <NoMatch handleBackToQuiz={() => setCurrentPage("quiz")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
