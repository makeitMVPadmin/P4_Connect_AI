import React from 'react';
import './photocard.scss';
import ideaIcon from '../../assets/icons/ideaIcon.svg'
import brifcaseIcon from '../../assets/icons/brifcaseIcon.svg'
import ButtonWithPanel from '../../components/P5AP_ButtonWithPanel/ButtonWithPanel'


const PhotoCard = ({ profilePicture, name, level, role, skills }) => {
  return (
    <div className="photocard">
      <div className="photocard__header">
        <img src={profilePicture} alt={`${name}`} className="photocard__image" />
          <ButtonWithPanel classNme="photocard__level"/>
      </div>
      <div className="photocard__info">
      <h2 className="photocard__name">{name}</h2>
          <p className="photocard__role">
              <img src={brifcaseIcon} alt="briefcase Icon" className="photocard_briefcase"/>      
              {role}
          </p>
          <p className="photocard__skills">
              <img src={ideaIcon} alt="idea Icon" className="photocard_idea"/>
              {Array.isArray(skills) ? skills.join(' · ') : 'No skills listed'}
          </p>
      </div>
    </div>
  );
};


export default PhotoCard;
