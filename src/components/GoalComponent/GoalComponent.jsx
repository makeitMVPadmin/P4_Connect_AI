import "./GoalComponent.scss";
import React from "react";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import { useState } from "react";


const GoalComponent = () => {
  const [user1Pic, setUser1Pic] = useState(user1); //replace user1 with null instead of image placeholder
  const [user2Pic, setUser2Pic] = useState(user2); //replace user2 with null instead of image placeholder

  return (
    <div className="goalComponent">
      <div className="matched">
        <div className="matched__images">
          <img src={user1Pic} alt="user1 avatar " className="matched__user" />
          <img src={user2Pic} alt="user2 avatar " className="matched__user" />
        </div>
      </div>
    </div>

  );
};

export default GoalComponent;
