import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ step }) => {
  const maxSteps = 10;
  const boxesPerStep = 1;
  const displaySteps = Math.min(step, maxSteps);
  return (
    <div className="progress-container">
      <div className="progress-bar">
        {[...Array(displaySteps * boxesPerStep)].map((_, index) => (
          <div key={index} className="progress-bar__box" />
        ))}
      </div>
      <div>
     
        <p className="progress-container__para1">Let’s learn a little bit about you...</p>
        <p className="progress-container__para2"> Please take a moment to answer the following questions.</p>
       
        
        
      </div>
    </div>
  );
};



export default ProgressBar;


