import React from "react";
import "./OnboardingPage.scss";
import Button from "../../components/Button/Button";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";

const OnboardingPage2 = () => {
  return (
    <div className="onboarding-page">
      <div className="onboarding-page__container">
        <>
          <div className="onboarding-page__text-container">
            <div className="welcome-message">
              How good are you at development?{" "}
            </div>
          </div>
          <div className="button-container">
            <Button text="Beginner" color="white" />
            <Button text="Intermediate" color="white" />
            <Button text="Expert" color="white" />
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

export default OnboardingPage2;
