import React, { useState } from "react";
import "./FilterBoard.scss";
import { ReactComponent as Exit } from "../../assets/images/exit.svg";

const FilterBoard = ({
  onApplyFilters,
  onClose,
  initialDifficulty,
  initialTechnology,
}) => {
  const [industry, setIndustry] = useState(["Development"]);
  const [difficulty, setDifficulty] = useState(initialDifficulty || []);
  const [technology, setTechnology] = useState(initialTechnology || []);

  const industries = ["Design", "Development"];
  const difficulties = ["Easy", "Intermediate", "Hard"];
  const technologies = ["Python", "React", "DSA", "Java"];

  const handleIndustryChange = (selectedIndustry) => {
    if (selectedIndustry === "Development") return; // Prevent deselecting Development
    if (industry.includes(selectedIndustry)) {
      setIndustry(industry.filter((selected) => selected !== selectedIndustry));
    } else {
      setIndustry([...industry, selectedIndustry]);
    }
  };

  const handleDifficultyChange = (level) => {
    if (difficulty.includes(level)) {
      setDifficulty(difficulty.filter((l) => l !== level));
    } else {
      setDifficulty([...difficulty, level]);
    }
  };

  const handleTechnologyChange = (tech) => {
    if (technology.includes(tech)) {
      setTechnology(technology.filter((t) => t !== tech));
    } else {
      setTechnology([...technology, tech]);
    }
  };

  const handleClearAll = () => {
    setIndustry(["Development"]);
    setDifficulty([]);
    setTechnology([]);
  };

  const handleSubmit = () => {
    onApplyFilters({ industry, difficulty, technology });
  };

  return (
    <div className="filterboard-container">
      <div className="filterboard">
        <div className="filterboard__header">
          <h2>Filters</h2>
          <button className="filterboard__header__close" onClick={onClose}>
            <Exit />
          </button>
        </div>
        <hr className="filterboard__divider" />

        <div className="filterboard__choice">
          {/* Industry Section */}
          <div className="filterboard__choice__sections">
            <h3>Industry</h3>
            {industries.map((ind) => (
              <button
                key={ind}
                className={`filterboard__choice__sections__button ${
                  industry.includes(ind) ? "active" : ""
                }`}
                onClick={() => handleIndustryChange(ind)}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Difficulty Section */}
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

          {/* Technology Section */}
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
