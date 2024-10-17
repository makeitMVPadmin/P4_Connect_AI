import React, { useState } from "react";
import { mockChallenges } from "../../mock-data/mockChallenges";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import filterIcon from "../../assets/images/filterIcon.svg";
import "./ChallengePage.scss";

const ChallengePage = () => {
  const selectedCategories = ["Development", "Python", "React", "Java", "DSA"];
  const selectedDifficulties = ["Easy", "Intermediate", "Hard"];

  // Filter challenges based on selected categories and difficulties
  const filteredChallenges = mockChallenges.challenges.filter(
    (challenge) =>
      selectedCategories.includes(challenge.category) &&
      selectedDifficulties.includes(challenge.difficulty)
  );

  return (
    <>
      <DashboardNavbar />
      <div className="challenge-page">
        <div className="header">
          <h1>Challenges</h1>
          <div className="filter">
            <img src={filterIcon} alt="Filter Icon" />
            <span>Filter</span>
          </div>
        </div>

        {/* Display selected filters as tabs */}
        <div className="selected-filters">
          {selectedCategories.map((category) => (
            <span key={category} className="filter-tab">
              {category}
            </span>
          ))}
          {selectedDifficulties.map((difficulty) => (
            <span key={difficulty} className="filter-tab">
              {difficulty}
            </span>
          ))}
        </div>

        <div className="card-container">
          {filteredChallenges.map((challenge, index) => (
            <ChallengeCard
              key={`${challenge.category}-${challenge.task}`}
              challenge={challenge}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChallengePage;
