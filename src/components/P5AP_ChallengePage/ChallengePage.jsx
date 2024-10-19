import React, { useState } from "react";
import { MOCK_CHALLENGES } from "../../mock-data/mockChallenges";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import filterIcon from "../../assets/images/filterIcon.svg";
import FilterBoard from "../P5AP_FilterBoard/FilterBoard";
import "./ChallengePage.scss";

const ChallengePage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(["Development"]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [isFilterBoardOpen, setIsFilterBoardOpen] = useState(false);

  // Filter challenges based on selected difficulties and technologies
  const filteredChallenges = MOCK_CHALLENGES.challenges.filter(
    (challenge) =>
      (selectedDifficulties.length === 0 ||
        selectedDifficulties.includes(challenge.difficulty)) &&
      (selectedTechnologies.length === 0 ||
        selectedTechnologies.includes(challenge.category))
  );

  // Handle applying filters from FilterBoard
  const applyFilters = (filters) => {
    setSelectedIndustry(filters.industry);
    setSelectedDifficulties(filters.difficulty);
    setSelectedTechnologies(filters.technology);
    setIsFilterBoardOpen(false);
  };

  return (
    <>
      <DashboardNavbar />
      <div className="challenge-page">
        <div className="header">
          <h1>Challenges ({filteredChallenges.length})</h1>
          <div className="filter" onClick={() => setIsFilterBoardOpen(true)}>
            <img src={filterIcon} alt="Filter Icon" />
            <span>Filter</span>
          </div>
        </div>

        {/* Display selected filters as tabs */}
        <div className="selected-filters">
          {selectedIndustry.map((industry) => (
            <span key={industry} className="filter-tab">
              {industry}
            </span>
          ))}
          {selectedDifficulties.map((difficulty) => (
            <span key={difficulty} className="filter-tab">
              {difficulty}
            </span>
          ))}
          {selectedTechnologies.map((technology) => (
            <span key={technology} className="filter-tab">
              {technology}
            </span>
          ))}
        </div>

        {/* Challenge Cards */}
        <div className="card-container">
          {filteredChallenges.map((challenge, index) => (
            <ChallengeCard key={index} challenge={challenge} />
          ))}
        </div>

        {/* FilterBoard Modal */}
        {isFilterBoardOpen && (
          <div className="modal-overlay">
            <FilterBoard
              onApplyFilters={applyFilters}
              onClose={() => setIsFilterBoardOpen(false)}
              initialDifficulty={selectedDifficulties}
              initialTechnology={selectedTechnologies}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ChallengePage;
