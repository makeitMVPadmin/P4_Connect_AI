import React, { useState } from "react";
import levelIcon from '../../assets/icons/levelIcon.svg';
import infoIcon from '../../assets/icons/infoIcon.svg'
import './ButtonWithPanel.scss';
import close_Icon from '../../assets/icons/close_icon.svg';

const ButtonWithPanel = ({ level, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => { 
    setIsOpen(false); 
  }; 

  return (
    <div className={`button-with-panel ${className}`}> 
      <button className="userLevel" onClick={togglePanel}>
        <img src={levelIcon} alt="level Icon" className="userLevel_levelIcon" />
        {level}
        <img src={infoIcon} alt="infor Icon" className="userLevel_infoIcon" />
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

          <button className="close-button" onClick={handleClose}> 
              <img src={close_Icon} alt="Close" className="closeIcon" /> 
          </button>

        </div>
      )}
    </div>
  );
};

export default ButtonWithPanel;