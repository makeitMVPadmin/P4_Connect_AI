import { useEffect, useState, useContext } from "react";
import "./PromptPage.scss";

import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Button from "../../components/Button/Button";
import { PageContext } from "../../contexts/PageContext";
import OnboardingPage1 from "../OnboardingPage/OnboardingPage1";
import OnboardingPage2 from "../OnboardingPage/OnboardingPage2";
import OnboardingPage3 from "../OnboardingPage/OnboardingPage3";
import LoadingPage from "../LoadingPage/LoadingPage";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";

const PromptPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("prompt");
  const [progressBarIndex, setProgressBarIndex] = useState(0);

  useEffect(() => {
    setCurrentPage("prompt");
  }, []);

  const handleNext = () => {
    if (progressBarIndex < 3) {
      setProgressBarIndex((prevIndex) => prevIndex + 1);
    }

    if (currentPage === "prompt") {
      setCurrentPage("onboarding1");
      setProgressBarIndex(1);
    } else if (currentPage === "onboarding1") {
      setCurrentPage("onboarding2");
      setProgressBarIndex(2);
    } else if (currentPage === "onboarding2") {
      setCurrentPage("onboarding3");
      setProgressBarIndex(3);
    }
  };

  const handleBack = () => {
    if (progressBarIndex > 0) {
      setProgressBarIndex((prevIndex) => prevIndex - 1);
    }

    if (currentPage === "onboarding1") {
      setCurrentPage("prompt");
      setProgressBarIndex(0);
    } else if (currentPage === "onboarding2") {
      setCurrentPage("onboarding1");
      setProgressBarIndex(1);
    } else if (currentPage === "onboarding3") {
      setCurrentPage("onboarding2");
      setProgressBarIndex(2);
    } else {
      navigate("/");
    }
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
                  text="Back to Home"
                  color="white"
                  className="next"
                  eventListener={handleBack}
                />
                <Button
                  text="Let's start up"
                  color="blue"
                  className="back"
                  border="none"
                  eventListener={handleNext}
                />
              </div>
              <div className="loading-icon-container">
                <img
                  src={
                    progressBarIndex === 0
                      ? loadingActiveIcon
                      : loadingInactiveIcon
                  }
                  alt="loadingIcon"
                />
                <img
                  src={
                    progressBarIndex === 1
                      ? loadingActiveIcon
                      : loadingInactiveIcon
                  }
                  alt="loadingIcon"
                />
                <img
                  src={
                    progressBarIndex === 2
                      ? loadingActiveIcon
                      : loadingInactiveIcon
                  }
                  alt="loadingIcon"
                />
                <img
                  src={
                    progressBarIndex === 3
                      ? loadingActiveIcon
                      : loadingInactiveIcon
                  }
                  alt="loadingIcon"
                />
              </div>
            </>
          )}

          {currentPage === "onboarding1" && (
            <OnboardingPage1
              onNext={handleNext}
              onBack={handleBack}
              progressBarIndex={progressBarIndex}
            />
          )}

          {currentPage === "onboarding2" && (
            <OnboardingPage2
              onNext={handleNext}
              onBack={handleBack}
              progressBarIndex={progressBarIndex}
            />
          )}

          {currentPage === "onboarding3" && (
            <OnboardingPage3
              onNext={handleNext}
              onBack={handleBack}
              progressBarIndex={progressBarIndex}
            />
          )}
          {/* handle loading page */}

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
