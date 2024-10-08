import "./PromptPage.scss";

import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Button from "../../components/Button/Button";

import { useEffect, useState } from "react";
import QuizPage from "../../components/QuizPage/QuizPage";
import Roadmap from "../../components/Roadmap/Roadmap";
import GoalAchieved from "../../components/GoalAchieved/GoalAchieved";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";

const PromptPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("prompt");

  // ACCESS MATCH ALGO RESULTS through a state passed into quizPage
  const [matchResults, setMatchResults] = useState(null);

  useEffect(() => {
    setCurrentPage("prompt");
    sessionStorage.removeItem("formData");
    sessionStorage.removeItem("answeredQuestions");
    sessionStorage.removeItem("selectedAnswerIdsJSON");
  }, []);

  const handleClick = () => {
    setCurrentPage("quiz");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <DashboardNavbar />
      <div className="promptpage">
        <div className="promptpage__container">
          {currentPage === "prompt" && (
            <>
              <div className="promptpage__text-container">
                <div className="welcome-message">Welcome to AccountaPair</div>
                <div className="welcome-text">
                  Set your preferences and skills before moving to the dashboard
                </div>
              </div>
              <div className="button-container">
                <Button
                  text="Back to home"
                  color="white"
                  className="next"
                  eventListener={handleBack}
                />
                <Button
                  text="Continue"
                  color="blue"
                  className="back"
                  border="none"
                  eventListener={handleClick}
                />
              </div>
              <div className="loading-icon-container">
                <img
                  src={loadingActiveIcon}
                  alt="loadingActiveIcon"
                  className="loading-active-icon"
                />
                <img
                  src={loadingInactiveIcon}
                  alt="loadingInactiveIcon"
                  className="loading-inactive-icon"
                />
                <img
                  src={loadingInactiveIcon}
                  alt="loadingInactiveIcon"
                  className="loading-inactive-icon"
                />
                <img
                  src={loadingInactiveIcon}
                  alt="loadingInactiveIcon"
                  className="loading-inactive-icon"
                />
              </div>
            </>
          )}
          {/* other pages */}
          {(currentPage === "quiz" ||
            currentPage === "new-match" ||
            currentPage === "no-match") && (
            <QuizPage
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}
          {currentPage === "roadmap" && <Roadmap />}
          {currentPage === "goalachieved" && <GoalAchieved />}
          {(currentPage === "loading" || currentPage === "loading1") && (
            <LoadingPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptPage;
