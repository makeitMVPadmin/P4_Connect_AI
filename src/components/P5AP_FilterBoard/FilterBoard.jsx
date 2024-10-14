import React, { useState } from "react";
import "./FilterBoard.scss";
import { ReactComponent as Exit } from "../../assets/images/exit.svg";

const FilterBoard = () => {
  // State for filters
  const [industry, setIndustry] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
  const [technology, setTechnology] = useState([]);

  // Data for filters
  const industries = ["Design", "Development"];
  const difficulties = ["Easy", "Intermediate", "Hard"];
  const technologies = ["Python", "Java", "React", "DSA", "jQuery"];

  // Handle industry change
  const handleIndustryChange = (selectedIndustry) => {
    if (industry.includes(selectedIndustry)) {
      setIndustry(
        industry.filter((selected) => selected !== selectedIndustry)
      );
    } else {
      setIndustry([...industry, selectedIndustry]);
    }
  };

  // Handle difficulty change
  const handleDifficultyChange = (level) => {
    if (difficulty.includes(level)) {
      setDifficulty(difficulty.filter((l) => l !== level));
    } else {
      setDifficulty([...difficulty, level]);
    }
  };

  // Handle technology change
  const handleTechnologyChange = (tech) => {
    if (technology.includes(tech)) {
      setTechnology(technology.filter((t) => t !== tech));
    } else {
      setTechnology([...technology, tech]);
    }
   
  };

  // Handle clearing all filters
  const handleClearAll = () => {
    setIndustry([]);
    setDifficulty([]);
    setTechnology([]);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  //just closes the 
  const handleExit = () => {
    handleClearAll();
    console.log("close")
  }
  return (
    <div className="filterboard-container">
      <div className="filterboard">
        <div className="filterboard__header">
          <h2>Filters</h2>
          <button
            className="filterboard__header__close"
            onClick={() => handleExit()}
          >
            <Exit />
          </button>
        </div>
        <hr className="filterboard__divider" />

        <div className="filterboard__choice">
          <div className="filterboard__choice__sections">
            <h3>Industry</h3>
            {industries.map((level) => (
              <button
                key={level}
                className={`filterboard__choice__sections__button ${
                  industry.includes(level) ? "active" : ""
                }`}
                onClick={() => handleIndustryChange(level)}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="filterboard__choice__sections">
            <h3>Difficulty</h3>
            {difficulties.map((level) => (
              <button
                key={level}
                className={`filterboard__choice__sections__button ${
                  difficulty.includes(level) ? "active" : ""
                }`}
                onClick={() => handleDifficultyChange(level)}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="filterboard__choice__sections">
            <h3>Technology</h3>
            {technologies.map((tech) => (
              <button
                key={tech}
                className={`filterboard__choice__sections__button ${
                  technology.includes(tech) ? "active" : ""
                }`}
                onClick={() => handleTechnologyChange(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <hr className="filterboard__divider filterboard__divider--bottom" />
        <div className="filterboard__actions">
          <button className="clear-button" onClick={handleClearAll}>
            Clear all
          </button>
          <button className="show-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBoard;
