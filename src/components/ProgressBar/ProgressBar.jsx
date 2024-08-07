import React from "react";
import "./ProgressBar.scss";
import CoffeeMugWithHat_happy from "../../assets/images/coffeeMugWithHat_happy.svg";
import CoffeeMugWithHat_sad from "../../assets/images/coffeeMugWithHat_sad.svg";

const ProgressBar = ({ step, currentPage }) => {
  const maxSteps = 11;
  const boxesPerStep = 1;
  const displaySteps = Math.min(step, maxSteps);

  return (
    <div>
      {currentPage === "quiz" && (
        <div className="progress-container">
          <div className="progress-bar">
            {[...Array(displaySteps * boxesPerStep)].map((_, index) => (
              <div key={index} className="progress-bar__box" />
            ))}
          </div>
          <div>
            <p className="progress-container__para1">
              Let’s learn a little bit about you...
            </p>
            <p className="progress-container__para2">
              {" "}
              Please take a moment to answer the following questions.
            </p>
            <div className="progress-container__image">
              <img
                src={CoffeeMugWithHat_happy}
                alt="Coffee Mug With Hat Happy"
                className="progress-container__mascot"
              />
            </div>
          </div>
        </div>
      )}
      {currentPage === "match" ||
        (currentPage === "new-match" && (
          <div className="progress-container">
            <div>
              <p className="progress-container__para1">We found your peer match!</p>
              <p className="progress-container__para2">
                {" "}
                You can either proceed to set a goal or redo the matching quiz to find a
                new partner.
              </p>
              <div className="progress-container__image">
                <img
                  src={CoffeeMugWithHat_happy}
                  alt="Coffee Mug With Hat Happy"
                  className="progress-container__mascot"
                />
              </div>
            </div>
          </div>
        ))}
      {currentPage === "no-match" && (
        <div className="progress-container">
          <div>
            <p className="progress-container__para1">We couldn't find a match...</p>
            <p className="progress-container__para2">
              You can either proceed to redo the matching quiz to find a partner or wait a
              couple of days and check in with us again.
            </p>
            <div className="progress-container__image">
              <img
                src={CoffeeMugWithHat_sad}
                alt="Coffee Mug With Hat Sad"
                className="progress-container__mascot"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // return (
  //   <div className="progress-container">
  //     <div className="progress-bar">
  //       {[...Array(displaySteps * boxesPerStep)].map((_, index) => (
  //         <div key={index} className="progress-bar__box" />
  //       ))}
  //     </div>
  //     <div>
  //       <p className="progress-container__para1">Let’s learn a little bit about you...</p>
  //       <p className="progress-container__para2">
  //         {" "}
  //         Please take a moment to answer the following questions.
  //       </p>
  //       <div className="progress-container__image">
  //         <img
  //           src={CoffeeMugWithHat_happy}
  //           alt="Coffee Mug With Hat Happy"
  //           className="progress-container__mascot"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ProgressBar;
