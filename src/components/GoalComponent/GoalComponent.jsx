import "./GoalComponent.scss";
import React from "react";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import { useState } from "react";
import DropdownCheckbox from "../DropdownCheckbox/DropdownCheckbox";
import ListWithCheckbox from "../ListWithCheckbox/ListWithCheckbox";

const GoalComponent = ({ goalNumber, goalPrompt, subtasks, children }) => {
  const [user1Pic, setUser1Pic] = useState(user1); //replace user1 with null instead of image placeholder
  const [user2Pic, setUser2Pic] = useState(user2); //replace user2 with null instead of image placeholder
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
        <div className="goalHeadingContainer__goalTitle">
          Goal {goalNumber}
        </div>
        <div className="goalHeadingContainer__goalPrompt">
          {goalPrompt}
        </div>
      </div>
      <div className="goalBreakdown__container">
        {/* {subtasks} */}
      <ListWithCheckbox
        options1={subtasks}

      />
      </div>

    </div >

  );
};

export default GoalComponent;
