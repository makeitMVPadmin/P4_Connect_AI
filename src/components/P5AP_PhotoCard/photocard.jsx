import React from 'react';
import './PhotoCard.scss'; 
import idea from '../../assets/icons/idea.svg'
import briefcase from '../../assets/icons/briefcase.svg'
import Vector from '../../assets/icons/Vector.svg'

const PhotoCard = ({ user }) => {
  return (
    <div className="photocard">
      <div className="photocard__header">
          <img src={user.profilePicture} alt={`${user.name}`} className="photocard__image" />
          <span className="photocard__level">
            <img src={Vector} alt="Level Icon" className="photocard__icon" />  
            {user.level}</span>
      </div>
      <div className="photocard__info">
          <h2 className="photocard__name">{user.name}</h2>
          <p className="photocard__role">
              <img src={briefcase} alt="briefcase Icon" className="photocard_briefcase"/>      
              {user.role}
          </p>
          <p className="photocard__skills">
              <img src={idea} alt="idea Icon" className="photocard_idea"/>
              {user.skills.join(' · ')}
          </p>
      </div>
    </div>
  );
};

export default PhotoCard;