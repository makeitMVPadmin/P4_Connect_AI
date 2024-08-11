import "./GoalComponent.scss";
import React, { useState, useEffect } from "react";
import user1 from "../../assets/images/user1.svg";
import user2 from "../../assets/images/user2.svg";
import hat from "../../assets/images/makeitMVP-hat.svg";
// import DropdownCheckbox from "../DropdownCheckbox/DropdownCheckbox";
import ListWithCheckbox from "../ListWithCheckbox/ListWithCheckbox";
import Button from "../Button/Button";

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
          <img className="matched__hat matched__hat--1" src={hat} alt="makeitMVP hat" />
          <img src={user1Pic} alt="user1 avatar " className="matched__user" />
          <img className="matched__hat matched__hat--2" src={hat} alt="makeitMVP hat" />
          <img src={user2Pic} alt="user2 avatar " className="matched__user" />
        </div>
      </div>
      {/* popup title  */}
      <div className="goalHeadingContainer">
        <div className="goalHeadingContainer__goalTitle">GOAL {goalNumber}</div>
        <div className="goalHeadingContainer__goalPrompt">{goalPrompt}</div>
      </div>
      <div className="goalBreakdown__container">
        {/* {subtasks} */}
        <ListWithCheckbox
          options1={subtasks}
          onChange={handleSubtaskChange}
          savedCheckedState={selectedSubtasks}
          spanClassName="option_goal"
          checkboxClassName="listwithcheckbox_options--checkboxesgoals"
          goaldivClassName="listwithcheckbox--goaldiv"
        />
      </div>
      <div className="goalComponent__buttons">
        <Button
          text="Save Changes"
          color="blue"
          eventListener={handleSave}
          className="saveButton"
        />
      </div>
    </div>
  );
};

export default GoalComponent;
