import "./QuizPage.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import React, { useState, Suspense } from "react";
import QuizQuestions from "../../components/QuizQuestions/QuizQuestions";
import LoadingPage from "../LoadingPage/LoadingPage";
import NoMatch from "../NoMatch/NoMatch";
import MatchedUsers from "../MatchedUsers/MatchedUsers";

const QuizPage = ({ currentPage, setCurrentPage }) => {
  //const step = 1;
  const [progress, setProgress] = useState(0);
  const onProgressChange = (answeredQuestionsCount) => {
 
    setProgress(answeredQuestionsCount);
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
              onProgressChange={onProgressChange}
            />
          )}
          {currentPage === "match" && (
            <Suspense fallback={<LoadingPage />}>
              <MatchedUsers
                handleBackToQuiz={() => setCurrentPage("quiz")}
                handleGoToGoal={() => setCurrentPage("roadmap")}
              />
            </Suspense>
          )}
          {currentPage === "no-match" && (
            <Suspense fallback={<LoadingPage />}>
              <NoMatch handleBackToQuiz={() => setCurrentPage("quiz")} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
