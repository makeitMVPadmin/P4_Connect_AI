import React from "react";
import "./ChallengeCard.scss";
import ChallengeCardBanner from "../../assets/images/ChallengeCardBanner.png";
import Pen from "../../assets/images/Pen.svg";
import Clock from "../../assets/images/Clock.png";
import Idea from "../../assets/images/Idea.png";
import { Link } from "react-router-dom";

const ChallengeCard = ({ challenge }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "#37AFFF";
      case "intermediate":
        return "#FFD22F";
      case "hard":
        return "#FF5733";
      default:
        return "#37AFFF";
    }
  };

  return (
    <div className="challenge-card">
      <div className="image-container">
        <img src={ChallengeCardBanner} alt="Challenge Card Banner" />
        <div
          className="difficulty-button"
          style={{ backgroundColor: getDifficultyColor(challenge.difficulty) }}
        >
          <div className="difficulty-text">{challenge.difficulty}</div>
        </div>
      </div>
      <div className="content-section">
        <div className="info-row">
          <img src={Pen} alt="Pen Icon" />
          <div className="category-text">{challenge.category}</div>
        </div>
        <div className="info-row">
          <img src={Clock} alt="Clock Icon" />
          <div className="duration-text">{challenge.duration}</div>
        </div>
        <div className="info-row">
          <img src={Idea} alt="Idea Icon" />
          <div className="task-text">{challenge.task}</div>
        </div>
        <Link to={`/challenge/${challenge.id}`} className="learn-more-button">
          <div className="button-text">Learn more</div>
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
