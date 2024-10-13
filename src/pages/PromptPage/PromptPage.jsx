import { useEffect, useContext } from "react";
import "./PromptPage.scss";

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
  const {
    currentPage,
    setCurrentPage,
    progressBarIndex,
    handleNext,
    handleBack,
  } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("prompt");
  }, [setCurrentPage]);

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

          {currentPage === "onboarding1" && <OnboardingPage1 />}

          {currentPage === "onboarding2" && <OnboardingPage2 />}

          {currentPage === "onboarding3" && <OnboardingPage3 />}
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
