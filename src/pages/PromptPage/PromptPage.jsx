import "./PromptPage.scss";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Button from "../../components/Button/Button";
// import CoffeeMugWithHat_happy from "../../assets/images/coffeeMugWithHat_happy.svg";
import { useEffect, useState } from "react";
import QuizPage from "../../components/QuizPage/QuizPage";
import Roadmap from "../../components/Roadmap/Roadmap";
import GoalAchieved from "../../components/GoalAchieved/GoalAchieved";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

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
              <div className="promptpage__top-bar" />
              <div className="promptpage__middle-container">
                <div className="promptpage__middle-container__sub-container">
                  <div className="promptpage__middle-container__coffeemug-container">
                    {/* <img
                      className="promptpage__middle-container__coffeemug-img"
                      alt=""
                      src={CoffeeMugWithHat_happy}
                    /> */}
                  </div>
                  <div className="promptpage__middle-container__sub-container text-container">
                    <div className="welcome-message">
                      Welcome to AccountaPair
                    </div>
                    <div className="welcome-text">
                      Set your preferences and skills before moving to the
                      dashboard
                    </div>
                  </div>
                  <div className="button-container">
                    <Button
                      text="Continue"
                      color="blue"
                      className="back"
                      border="none"
                      eventListener={handleBack}
                    />

                    <Button
                      text="Back to home"
                      color="white"
                      className="next"
                      eventListener={handleClick}
                    />
                  </div>
                </div>
              </div>
              <div className="promptpage__bottom-bar" />
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
