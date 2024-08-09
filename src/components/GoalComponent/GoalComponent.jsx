import "./GoalComponent.scss";
import React, { useState, useEffect } from "react";
import user1 from "../../assets/images/user1.svg";
import user2 from "../../assets/images/user2.svg";
// import DropdownCheckbox from "../DropdownCheckbox/DropdownCheckbox";
import ListWithCheckbox from "../ListWithCheckbox/ListWithCheckbox";

const GoalComponent = ({
  goalNumber,
  goalPrompt,
  subtasks,
  onSaveChanges,
  savedProgress,
  onClose,
}) => {
  const [user1Pic, setUser1Pic] = useState(user1); //replace user1 with null instead of image placeholder
  const [user2Pic, setUser2Pic] = useState(user2); //replace user2 with null instead of image placeholder
  const [selectedSubtasks, setSelectedSubtasks] = useState(savedProgress || {});

  useEffect(() => {
    setSelectedSubtasks(savedProgress || {});
  }, [savedProgress, goalNumber]);

  const handleSubtaskChange = (newSelectedValues) => {
    setSelectedSubtasks(newSelectedValues);
  };

  const handleSave = () => {
    onSaveChanges(goalNumber, selectedSubtasks);
  };

  return (
    <div className="goalComponent">
      {/* matched users icons */}
      <div className="matched">
        <div className="matched__images">
          <img src={user1Pic} alt="user1 avatar " className="matched__user" />
          <img src={user2Pic} alt="user2 avatar " className="matched__user" />
        </div>
      </div>
      {/* popup title  */}
      <div className="goalHeadingContainer">
        <div className="goalHeadingContainer__goalTitle">Goal {goalNumber}</div>
        <div className="goalHeadingContainer__goalPrompt">{goalPrompt}</div>
      </div>
      <div className="goalBreakdown__container">
        {/* {subtasks} */}
        <ListWithCheckbox
          options1={subtasks}
          onChange={handleSubtaskChange}
          savedCheckedState={selectedSubtasks}
        />
      </div>
      <div className="goalComponent__buttons">
        <button onClick={handleSave} className="saveButton">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default GoalComponent;
