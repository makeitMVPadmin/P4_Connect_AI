import React from "react";
import "./ChallengeCard.scss";
import ChallengeCardBanner1 from "../../assets/images/ChallengeCardBanner1.png";
import ChallengeCardBanner2 from "../../assets/images/ChallengeCardBanner2.png";
import ChallengeCardBanner3 from "../../assets/images/ChallengeCardBanner3.png";
import ChallengeCardBanner4 from "../../assets/images/ChallengeCardBanner4.png";
import ChallengeCardBanner5 from "../../assets/images/ChallengeCardBanner5.png";
import ChallengeCardBanner6 from "../../assets/images/ChallengeCardBanner6.png";
import ChallengeCardBanner7 from "../../assets/images/ChallengeCardBanner7.png";
import ChallengeCardBanner8 from "../../assets/images/ChallengeCardBanner8.png";
import ChallengeCardBanner9 from "../../assets/images/ChallengeCardBanner9.png";
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
        return "#FF7070";
      default:
        return "#37AFFF";
    }
  };

  const getRandomBannerImage = (difficulty) => {
    const easyBanners = [
      ChallengeCardBanner1,
      ChallengeCardBanner2,
      ChallengeCardBanner3,
    ];
    const intermediateBanners = [
      ChallengeCardBanner4,
      ChallengeCardBanner5,
      ChallengeCardBanner6,
    ];
    const hardBanners = [
      ChallengeCardBanner7,
      ChallengeCardBanner8,
      ChallengeCardBanner9,
    ];
    switch (difficulty.toLowerCase()) {
      case "easy":
        return easyBanners[Math.floor(Math.random() * easyBanners.length)];
      case "intermediate":
        return intermediateBanners[
          Math.floor(Math.random() * intermediateBanners.length)
        ];
      case "hard":
        return hardBanners[Math.floor(Math.random() * hardBanners.length)];
      default:
        return easyBanners[Math.floor(Math.random() * easyBanners.length)];
    }
  };

  return (
    <div className="challenge-card">
      <div className="image-container">
        <img
          src={getRandomBannerImage(challenge.difficulty)}
          alt="Challenge Card Banner"
        />
        <div
          className="difficulty-button"
          style={{ backgroundColor: getDifficultyColor(challenge.difficulty) }}
        >
          <div
            className="difficulty-text"
            style={{ color: challenge.difficulty === "Hard" ? "#fff" : "#000" }}
          >
            {challenge.difficulty}
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="info-row">
          <img className="pen-icon" src={Pen} alt="Pen Icon" />
          <div className="category-text">{challenge.category}</div>
        </div>
        <div className="info-row">
          <img className="clock-icon" src={Clock} alt="Clock Icon" />
          <div className="duration-text">{challenge.duration}</div>
        </div>
        <div className="info-row">
          <img className="idea-icon" src={Idea} alt="Idea Icon" />
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
