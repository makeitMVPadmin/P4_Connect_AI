import { useContext } from "react";
import "./OnboardingPage.scss";
import Button from "../../components/Button/Button";
import { PageContext } from "../../contexts/PageContext";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";

const OnboardingPage2 = () => {
  const { handleNext, handleBack, progressBarIndex } = useContext(PageContext);
  return (
    <div className="onboarding-page">
      <div className="onboarding-page__container">
        <>
          <div className="left-arrow-container" onClick={handleBack}>
            <img src={arrowLeft} alt="arrowLeft" className="arrow-left" />
          </div>
          <div className="onboarding-page__text-container">
            <div className="welcome-message">How good are you at field?</div>
          </div>
          <div className="onboarding-button-container">
            <Button text="Beginner" color="white" eventListener={handleNext} />
            <Button
              text="Intermediate"
              color="white"
              eventListener={handleNext}
            />
            <Button text="Expert" color="white" eventListener={handleNext} />
          </div>
          <div className="loading-icon-container">
            <img
              src={
                progressBarIndex === 0 ? loadingActiveIcon : loadingInactiveIcon
              }
              alt="loadingActiveIcon"
            />
            <img
              src={
                progressBarIndex === 1 ? loadingActiveIcon : loadingInactiveIcon
              }
              alt="loadingInactiveIcon"
            />
            <img
              src={
                progressBarIndex === 2 ? loadingActiveIcon : loadingInactiveIcon
              }
              alt="loadingInactiveIcon"
            />
            <img
              src={
                progressBarIndex === 3 ? loadingActiveIcon : loadingInactiveIcon
              }
              alt="loadingInactiveIcon"
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default OnboardingPage2;
