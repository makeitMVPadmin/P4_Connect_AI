import { useContext } from "react";
import "./OnboardingPage.scss";
import Button from "../../components/Button/Button";
import { PageContext } from "../../contexts/PageContext";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";

const OnboardingPage3 = () => {
  const {
    handleNext,
    handleBack,
    progressBarIndex,
    updateUserFeedback,
    userFeedback,
  } = useContext(PageContext);

  const handleSkillSelection = (skill) => {
    updateUserFeedback("skillToImprove", skill);
    handleNext();
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-page__container">
        <>
          <div className="left-arrow-container" onClick={handleBack}>
            <img src={arrowLeft} alt="arrowLeft" className="arrow-left" />
          </div>
          <div className="onboarding-page__text-container">
            <div className="welcome-message">
              What skill do you want to work on in{" "}
              {userFeedback.field || "your field"}?
            </div>
          </div>
          <div className="onboarding-button-container">
            <Button
              text="DSA"
              color="white"
              eventListener={() => handleSkillSelection("DSA")}
            />
            <Button
              text="Python"
              color="white"
              eventListener={() => handleSkillSelection("Python")}
            />
            <Button
              text="Java"
              color="white"
              eventListener={() => handleSkillSelection("Java")}
            />
            <Button
              text="React"
              color="white"
              eventListener={() => handleSkillSelection("React")}
            />
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

export default OnboardingPage3;
