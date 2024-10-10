import React, { useState } from "react";
import "./FilterBoard.scss";

const FilterBoard = () => {
  // State for filters
  const [industry, setIndustry] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [technology, setTechnology] = useState([]);

  // Data for filters
  const difficulties = ["Easy", "Intermediate", "Hard"];
  const technologies = ["Python", "Java", "React", "DSA", "jQuery"];

  // Handle industry change
  const handleIndustryChange = (selectedIndustry) => {
    setIndustry(selectedIndustry);
  };

  // Handle difficulty change
  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
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
    setIndustry("");
    setDifficulty("");
    setTechnology([]);
  };

  return (
    <div className="filterboard">
      <h2>Filters</h2>
      <hr
        style={{
          backgroundColor: "black",
          height: "1px",
                  border: "none",
                  width: "100%",
                  position: "",
                  top: "88px",
        }}
      />
      <div
        style={{
          borderTop: "2px solid #fff ",
          marginLeft: 20,
          marginRight: 20,
        }}
      ></div>
      <div className="filterboard__sections">
        <h3>Industry</h3>
        <button
          className={`filterboard__sections__button ${
            industry === "Design" ? "active" : ""
          }`}
          onClick={() => handleIndustryChange("Design")}
        >
          Design
        </button>
        <button
          className={`filterboard__sections__button ${
            industry === "Development" ? "active" : ""
          }`}
          onClick={() => handleIndustryChange("Development")}
        >
          Development
        </button>
      </div>

      <div className="filterboard__sections">
        <h3>Difficulty</h3>
        {difficulties.map((level) => (
          <button
            key={level}
            className={`filterboard__sections__button ${
              difficulty === level ? "active" : ""
            }`}
            onClick={() => handleDifficultyChange(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="filterboard__sections">
        <h3>Technology</h3>
        {technologies.map((tech) => (
          <button
            key={tech}
            className={`filterboard__sections__button ${
              technology.includes(tech) ? "active" : ""
            }`}
            onClick={() => handleTechnologyChange(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="filter-actions">
        <button className="clear-button" onClick={handleClearAll}>
          Clear all
        </button>
        <button className="show-button">Show all</button>
      </div>
    </div>
  );
};

export default FilterBoard;
