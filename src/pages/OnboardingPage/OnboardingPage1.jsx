import React from "react";
import "./OnboardingPage.scss";
import Button from "../../components/Button/Button";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";

const OnboardingPage = () => {
  return (
    <div className="onboarding-page">
      <div className="onboarding-page__container">
        <>
          <div className="onboarding-page__text-container">
            <div className="welcome-message">
              What field are you looking to work on?{" "}
            </div>
          </div>
          <div className="button-container">
            <Button text="Design" color="white" />
            <Button text="Development" color="white" />
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

export default OnboardingPage;
