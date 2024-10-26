import React, { useState, useEffect, useContext } from "react";
import { readData } from "../../utils/Functions/functions";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import filterIcon from "../../assets/images/filterIcon.svg";
import FilterBoard from "../P5AP_FilterBoard/FilterBoard";
import { PageContext } from "../../contexts/PageContext";
import "./ChallengePage.scss";
import closeIcon from "../../assets/icons/close_icon.svg";

const ChallengePage = () => {
  const { userFeedback } = useContext(PageContext);
  const [challenges, setChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(["Development"]); // Development is always selected since we dont have any data for design in firestore
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [isFilterBoardOpen, setIsFilterBoardOpen] = useState(false);

  useEffect(() => {
    const fetchChallenges = async () => {
      setIsLoading(true);
      try {
        const fetchedChallenges = await readData("Challenges");
        setChallenges(fetchedChallenges);
        setError(null);
      } catch (error) {
        setError("Failed to fetch challenges. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  useEffect(() => {
    if (userFeedback.field && userFeedback.field !== "Development") {
      // Development is always selected since we dont have any data for design in firestore
      setSelectedIndustry(["Development", userFeedback.field]);
    }
    if (userFeedback.skillLevel) {
      setSelectedDifficulties([userFeedback.skillLevel]);
    }
    if (userFeedback.skillToImprove) {
      setSelectedTechnologies([userFeedback.skillToImprove]);
    }
  }, [userFeedback]);

  const filteredChallenges = challenges.filter((challenge) => {
    const industryMatch = true; // Always true because "Development" is always included
    const difficultyMatch =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(challenge.difficulty);
    const technologyMatch =
      selectedTechnologies.length === 0 ||
      selectedTechnologies.some((tech) => challenge.category.includes(tech));
    return industryMatch && difficultyMatch && technologyMatch;
  });

  const applyFilters = (filters) => {
    setSelectedIndustry(["Development", ...(filters.industry || [])]);
    setSelectedDifficulties(filters.difficulty || []);
    setSelectedTechnologies(filters.technology || []);
    setIsFilterBoardOpen(false);
  };

  if (isLoading) {
    return <div>Loading challenges...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

        <div className="selected-filters-container">
          <span className="filter-name">Filter:</span>
          <div className="selected-filters">
            {selectedIndustry.map((industry) => (
              <div key={industry} className="filter-tab">
                <span className="filter-text">{industry}</span>
                <img
                  src={closeIcon}
                  alt="Remove filter"
                  className="close-icon"
                  onClick={() =>
                    setSelectedIndustry(
                      selectedIndustry.filter((i) => i !== industry)
                    )
                  }
                />
              </div>
            ))}
            {selectedDifficulties.map((difficulty) => (
              <div key={difficulty} className="filter-tab">
                <span className="filter-text">{difficulty}</span>
                <img
                  src={closeIcon}
                  alt="Remove filter"
                  className="close-icon"
                  onClick={() =>
                    setSelectedDifficulties(
                      selectedDifficulties.filter((d) => d !== difficulty)
                    )
                  }
                />
              </div>
            ))}
            {selectedTechnologies.map((technology) => (
              <div key={technology} className="filter-tab">
                <span className="filter-text">{technology}</span>
                <img
                  src={closeIcon}
                  alt="Remove filter"
                  className="close-icon"
                  onClick={() =>
                    setSelectedTechnologies(
                      selectedTechnologies.filter((t) => t !== technology)
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="card-container">
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))
          ) : (
            <p>No challenges found matching the current filters.</p>
          )}
        </div>

        {isFilterBoardOpen && (
          <div className="modal-overlay">
            <FilterBoard
              onApplyFilters={applyFilters}
              onClose={() => setIsFilterBoardOpen(false)}
              initialIndustry={selectedIndustry}
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
