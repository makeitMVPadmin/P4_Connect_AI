import "./PromptPage.scss";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Button from "../../components/Button/Button";
import CoffeeMugWithHat_happy from "../../assets/images/coffeeMugWithHat_happy.svg";
import {  useEffect, useState } from "react";
import QuizPage from "../../components/QuizPage/QuizPage";
import Roadmap from "../../components/Roadmap/Roadmap";
import GoalAchieved from "../../components/GoalAchieved/GoalAchieved";

const PromptPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("prompt");

  // ACCESS MATCH ALGO RESULTS through a state passed into quizPage
  const [matchResults, setMatchResults] = useState(null);

  useEffect(() => {
    setCurrentPage("prompt");
    sessionStorage.removeItem("formData");
    sessionStorage.removeItem("answeredQuestions");
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
                    <img
                      className="promptpage__middle-container__coffeemug-img"
                      alt=""
                      src={CoffeeMugWithHat_happy}
                    />
                  </div>
                  <div className="promptpage__middle-container__sub-container text-container">
                    <div className="welcome-message">Welcome to Accountabuddy</div>
                    <div className="welcome-text welcome-text--main">
                      Our AI feature empowers you to achieve your professional goals
                      through personalized accountability partnerships. By taking our
                      quick matching quiz, you’ll be paired with a peer who complements
                      your skills, and you both will work towards a common goal.
                    </div>
                    <div className="welcome-text">
                      Click "Next" to get started on your journey to effective
                      peer-to-peer accountability.
                    </div>
                  </div>
                  <div className="button-container">
                    <Button
                      text="Back"
                      color="white"
                      className="back"
                      eventListener={handleBack}
                    />

                    <Button
                      text="Next"
                      color="dark-blue"
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
            <QuizPage setCurrentPage={setCurrentPage} currentPage={currentPage} />
          )}
          {currentPage === "roadmap" && <Roadmap />}
          {currentPage === "goalachieved" && <GoalAchieved />}
        </div>
      </div>
    </div>
  );
};

export default PromptPage;
