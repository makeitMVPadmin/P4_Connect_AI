import React from "react";
import "./OnboardingPage.scss";
import Button from "../../components/Button/Button";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";

const OnboardingPage3 = ({ onNext, onBack }) => {
  return (
    <div className="onboarding-page">
      <div className="onboarding-page__container">
        <>
          <div className="left-arrow-container" onClick={onBack}>
            <img src={arrowLeft} alt="arrowLeft" className="arrow-left" />
          </div>
          <div className="onboarding-page__text-container">
            <div className="welcome-message">
              What are some skills you want to work on?{" "}
            </div>
          </div>
          <div className="button-container">
            <Button text="Front End" color="white" eventlistener={onNext} />
            <Button text="Back End" color="white" eventlistener={onNext} />
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
      </div>
    </div>
  );
};

export default OnboardingPage3;
