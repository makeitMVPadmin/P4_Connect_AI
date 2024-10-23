import React, { useState } from "react";
import "./P5ChallengeTaskStepper.scss";
import { useNavigate } from "react-router-dom";
import { Preview } from "@mui/icons-material";

const P5ChallengeTaskStepper = () => {
  const navigate = useNavigate();
  const taskDetails = {
    steps: [
      {
        stepTitle: "Connect with Partner",
        stepContent: [
          {
            sectionTitle: "LinkedIn",
            description:
              '• Connect with your partner by using the LinkedIn button located in the right tab next to "Connect." Alternatively, you can look them up by their username.',
          },
          {
            sectionTitle: "Google Meet",
            description:
              '• Use the Google Meet button in the right tab next to "Connect." This will direct you to Google Meet, where a meeting template will be prefilled, making it easier to schedule a session with your partner.',
          },
        ],
      },
      {
        stepTitle: "Review Partner's Code",
        stepContent: [
          {
            sectionTitle: "Challenge Overview",
            description:
              "1. Use HTML to create a card layout, including an image, title, description, and a hidden section with text.\n2. Apply CSS for layout and design (e.g., background color, padding, and shadows).\n3. Implement JavaScript to toggle the visibility of the hidden text when the card is clicked.",
          },
          {
            sectionTitle: "Send and Review Code",
            description:
              "• Ensure the click event works and the hidden text reveals itself correctly.\n• Review the structure and organization of the HTML, CSS, and JavaScript. Are there ways to improve readability or modularity? Evaluate the overall appearance of the card.\n• Is the design polished and responsive across various screen sizes?",
          },
        ],
      },
      {
        stepTitle: "Finalize Component Together",
        stepContent: [
          {
            sectionTitle: "Apply feedback",
            description:
              "• Collaborate with your partner to apply any feedback or improvements based on your reviews.",
          },
          {
            sectionTitle: "Test the Final Version",
            description:
              "• Work together to test the final component and ensure everything functions correctly.",
          },
          {
            sectionTitle: "Submit the Final Challenge",
            description:
              "• Once you are both satisfied with the final version of the component, submit the challenge by clicking Complete.",
          },
        ],
      },
    ],
  };

  const handleDashboard = () => {
    navigate("/ChallengePage");
  };
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < 3) {
      // Assuming you have 3 steps (you can adjust this value based on your step count)
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    // <div className="task-stepper-container">
    //   {/* Connect with Partner Button */}
    //   <div className="step-button">
    //     <div className="button-text">Connect with Partner</div>
    //   </div>

    //   {/* Task Details */}
    //   <div className="task-details">
    //     {/* LinkedIn Section */}
    //     <div className="task-section">
    //       <div className="section-title">LinkedIn</div>
    //       <div className="section-description">
    //         Connect with your partner by using the LinkedIn button located in
    //         the right tab next to “Connect.”
    //         <br />
    //         Alternatively, you can look them up by their username.
    //       </div>
    //     </div>

    //     {/* Google Meet Section */}
    //     <div className="task-section">
    //       <div className="section-title">Google Meet</div>
    //       <div className="section-description">
    //         Use the Google Meet button in the right tab next to “Connect.” This
    //         will direct you to Google Meet, where a meeting template will be
    //         prefilled, making it easier to schedule a session with your partner.
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="task-stepper-container">
      {taskDetails.steps.map((step, index) => (
        <>
          <div key={index} className="step-section">
            {/* Dynamic Button for each step */}
            <div
              className={`step-button ${currentStep == index ? 'completed' : ''}`}
              style={{ backgroundColor: step.buttonColor }}
            >
              <div className="button-text">{step.stepTitle}</div>
            </div>

            {/* Task Details */}
            <div className="task-details">
              {step.stepContent.map((content, subIndex) => (
                <div key={subIndex} className="task-section">
                  <div className="section-title">{content.sectionTitle}</div>
                  <div
                    className="section-description"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {content.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
      <div className="navigation-bottom-buttons">
        <button className="dashboard-button" onClick={handleDashboard}>
          <span className="dashboard-text">Dashboard</span>
        </button>
        <button className={`next-button ${currentStep >= 2 ? 'completed' : ''}`} onClick={handleNextStep}>
          <span className="next-text">Next Step</span>
        </button>
      </div>
    </div>
  );
};

export default P5ChallengeTaskStepper;
