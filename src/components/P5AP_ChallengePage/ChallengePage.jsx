import React, { useState, useEffect, useContext } from "react";
import { readData } from "../../utils/Functions/functions";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import filterIcon from "../../assets/images/filterIcon.svg";
import FilterBoard from "../P5AP_FilterBoard/FilterBoard";
import { PageContext } from "../../contexts/PageContext";
import "./ChallengePage.scss";

const ChallengePage = () => {
  const { userFeedback } = useContext(PageContext);
  console.log("ChallengePage mounted, userFeedback:", userFeedback);
  const [challenges, setChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(["Development"]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [isFilterBoardOpen, setIsFilterBoardOpen] = useState(false);

  useEffect(() => {
    const fetchChallenges = async () => {
      setIsLoading(true);
      try {
        const fetchedChallenges = await readData("Challenges");
        console.log("Fetched challenges:", fetchedChallenges);
        setChallenges(fetchedChallenges);
        setError(null);
      } catch (error) {
        console.error("Error fetching challenges:", error);
        setError("Failed to fetch challenges. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  useEffect(() => {
    console.log("Setting initial filters. UserFeedback:", userFeedback);
    if (userFeedback.field && userFeedback.field !== "Development") {
      setSelectedIndustry(["Development", userFeedback.field]);
    }
    if (userFeedback.skillLevel) {
      setSelectedDifficulties([userFeedback.skillLevel]);
    }
    if (userFeedback.skillToImprove) {
      setSelectedTechnologies([userFeedback.skillToImprove]);
    }
    console.log("Filters set:", {
      industry: selectedIndustry,
      difficulties: selectedDifficulties,
      technologies: selectedTechnologies,
    });
  }, [userFeedback]);

  useEffect(() => {
    console.log("Current filter settings:");
    console.log("Selected Industry:", selectedIndustry);
    console.log("Selected Difficulties:", selectedDifficulties);
    console.log("Selected Technologies:", selectedTechnologies);
  }, [selectedIndustry, selectedDifficulties, selectedTechnologies]);

  const filteredChallenges = challenges.filter((challenge) => {
    const industryMatch = true; // Always true because "Development" is always included
    const difficultyMatch =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(challenge.difficulty);
    const technologyMatch =
      selectedTechnologies.length === 0 ||
      selectedTechnologies.some((tech) => challenge.category.includes(tech));

    console.log(
      `Challenge ${challenge.id}:`,
      `Industry: ${industryMatch}`,
      `Difficulty: ${difficultyMatch}`,
      `Technology: ${technologyMatch}`
    );

    return industryMatch && difficultyMatch && technologyMatch;
  });

  console.log("Filtered challenges:", filteredChallenges);

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
