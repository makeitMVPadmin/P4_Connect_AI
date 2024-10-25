import React from 'react';
import './photocard.scss'; 
import ideaIcon from '../../assets/icons/ideaIcon.svg';
import brifcaseIcon from '../../assets/icons/brifcaseIcon.svg';
import ButtonWithPanel from '../../components/P5AP_ButtonWithPanel/ButtonWithPanel';

const PhotoCard = ({ user }) => {
  const { profilePicture, name, level, role, skills } = user || {};

  return (
    <div className="photocard">
      <div className="photocard__header">
        <img src={profilePicture} alt={`${name}`} className="photocard__image" /> 
        <ButtonWithPanel className="photocard__level" level={level} />
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




