import React, { useState } from "react";
import levelIcon from '../../assets/icons/levelIcon.svg';
import './ButtonWithPanel.scss';

const ButtonWithPanel = ({ level, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`button-with-panel ${className}`}> 
      <button className="userLevel" onClick={togglePanel}>
        <img src={levelIcon} alt="level Icon" className="userLevel_levelIcon" />
        {level}
      </button>

      {isOpen && (
        <div className="info-panel">
          <div className="info-panel_title">Leveling Up in Accountapair</div>
          <div className="info-panel_subtitle">
            What determines someone's expertise on the Communiti platform?
          </div>
          <div className="info-panel_text">
            When you join Communiti, your account is initially set to Beginner.
            As you complete more challenges, your expertise will gradually increase through levels: 
            Beginner, Intermediate, and Advanced. 
            This helps users identify the experience level of their challenge partners,
            particularly when using the AccountaPair feature.
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithPanel;