import React, { useState } from "react";
import "./ProgressBar.scss";

const ProgressBar = () => {
  const [step, setStep] = useState(1);
  const maxSteps = 4;
  const boxesPerStep = 2;

  const handleNext = () => {
    if (step < maxSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-bar">
        {[...Array(step * boxesPerStep)].map((_, index) => (
          <div key={index} className="progress-bar__box" />
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleBack} disabled={step === 1}>
          Back
        </button>
        <button onClick={handleNext} disabled={step === maxSteps}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;

// const ProgressBar = ({ currentStep, onNext, onBack }) => {
//     const maxSteps = 4;
//     const boxesPerStep = 2;

//     return (
//       <div className="progress-bar">
//         {[...Array(currentStep * boxesPerStep)].map((_, index) => (
//           <div key={index} className="progress-bar__box" />
//         ))}
//       </div>
//     );
//   };
/* <ProgressBar 
  currentStep={currentStep} 
  onNext={handleNext} 
  onBack={handleBack}
/> */
