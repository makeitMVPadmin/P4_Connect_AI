import { useEffect, useContext } from "react";
import "./PromptPage.scss";

import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Button from "../../components/Button/Button";
import { PageProvider, PageContext } from "../../contexts/PageContext";
import OnboardingPage1 from "../OnboardingPage/OnboardingPage1";
import OnboardingPage2 from "../OnboardingPage/OnboardingPage2";
import OnboardingPage3 from "../OnboardingPage/OnboardingPage3";
// import LoadingPage from "../LoadingPage/LoadingPage";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";

const PromptPage = () => {
  const {
    currentPageIndex,
    setCurrentPageIndex,
    progressBarIndex,
    handleNext,
    handleBack,
    progressArray,
  } = useContext(PageContext);
  useEffect(() => {
    setCurrentPageIndex(0);
  }, [setCurrentPageIndex]);
  console.log("Rendering PromptPage, currentPageIndex:", currentPageIndex);

  return (
    <div>
      <DashboardNavbar />
      <div className="promptpage">
        <div className="promptpage__container">
          {currentPageIndex === 0 && (
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
                  eventListener={() => handleNext(progressArray.length - 1)}
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

          {currentPageIndex === 1 && <OnboardingPage1 />}

          {currentPageIndex === 2 && <OnboardingPage2 />}

          {currentPageIndex === 3 && <OnboardingPage3 />}
          {/* handle loading page */}

          {/* {(currentPageIndex === 4 || currentPageIndex === 5) && (
            <LoadingPage
              currentPage={progressArray[currentPageIndex]}
              setCurrentPage={setCurrentPageIndex}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

const PromptPageProvider = () => {
  return (
    <PageProvider>
      <PromptPage />
    </PageProvider>
  );
};

export default PromptPageProvider;
