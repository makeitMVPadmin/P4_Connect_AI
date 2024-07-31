import React, { useState } from "react";
import "./Roadmap.scss";
import { ReactComponent as RoadmapSvg } from "../../assets/images/roadmapBackground.svg";
import { ReactComponent as Goal1Icon } from "../../assets/icons/roadmapIcon1.svg";
import { ReactComponent as Goal2Icon } from "../../assets/icons/roadmapIcon2.svg";
import { ReactComponent as Goal3Icon } from "../../assets/icons/roadmapIcon3.svg";
import { ReactComponent as Goal4Icon } from "../../assets/icons/roadmapIcon4.svg";
import { ReactComponent as Goal5Icon } from "../../assets/icons/roadmapIcon5.svg";
import Goal1Component from "../Goal1Component/Goal1Component";
import Goal2Component from "../Goal2Component/Goal2Component";

const Roadmap = () => {
  const [activeGoal, setActiveGoal] = useState(null);
  const handleGoalClick = (goalNumber) => {
    setActiveGoal(goalNumber);
  };

  const renderActiveComponent = () => {
    switch (activeGoal) {
      case 1:
        return <Goal1Component />;
      case 2:
        return <Goal2Component />;
      default:
        return null;
    }
  };

  return (
    <div className="roadmap-container">
      <div className="svg-container">
        <RoadmapSvg />
        <button
          className="goal-button goal1"
          onClick={() => handleGoalClick(1)}
        >
          <Goal1Icon />
        </button>
        <button
          className="goal-button goal2"
          onClick={() => handleGoalClick(2)}
        >
          <Goal2Icon />
        </button>
        <button
          className="goal-button goal3"
          onClick={() => handleGoalClick(3)}
        >
          <Goal3Icon />
        </button>
        <button
          className="goal-button goal4"
          onClick={() => handleGoalClick(4)}
        >
          <Goal4Icon />
        </button>
        <button
          className="goal-button goal5"
          onClick={() => handleGoalClick(5)}
        >
          <Goal5Icon />
        </button>
      </div>
      <div className="active-goal-container">{renderActiveComponent()}</div>
    </div>
  );
};

export default Roadmap;
