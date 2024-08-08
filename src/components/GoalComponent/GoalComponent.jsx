import "./GoalComponent.scss";
import React from "react";
import user1 from "../../assets/images/user1.svg";
import user2 from "../../assets/images/user2.svg";
import { useState } from "react";
import DropdownCheckbox from "../DropdownCheckbox/DropdownCheckbox";

const GoalComponent = ({ goalNumber, goalPrompt, goals, children }) => {
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
      {/* <DropdownCheckbox
            labelName={item.question_content}
            options1={answers}
            question_id={item.question_id}
            onChangeDropdownCheckbox={(value) =>
              handleInputChange(item.question_type, item.question_content, value)
            }
          /> */}
      </div>

    </div >

  );
};

export default GoalComponent;
