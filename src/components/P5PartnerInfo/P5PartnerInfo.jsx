import React from 'react';
import './P5PartnerInfo.scss';
import profileImage from '../../assets/images/Profile Image.jpg'; // Path to the partner's profile image
import beginnerIcon from '../../assets/images/work_24px.jpg'; // Path to the beginner level icon
import fullStackIcon from '../../assets/images/file-chart_24px.jpg'; // Path to the full stack icon

const P5PartnerInfo = () => {
    return (
        <div className="partner-info-wrapper">
            {/* Partner Title */}
            <div className="partner-title">Partner</div>

            {/* Partner Info Section */}
            <div className="partner-info-container">
                {/* Kate Tanner Profile */}
                <div className="partner-badge primary-badge">
                    <img src={profileImage} alt="Kate Tanner" className="partner-image" />
                    <div className="partner-name">Kate Tanner</div>
                </div>

                {/* Stacked Badges */}
                <div className="partner-badge-container">
                    {/* Beginner Badge */}
                    <div className="partner-badge secondary-badge">
                        <img src={beginnerIcon} alt="Beginner Icon" className="badge-icon" />
                        <div className="badge-text">Beginner</div>
                    </div>

                    {/* Full Stack Dev Badge */}
                    <div className="partner-badge secondary-badge">
                        <img src={fullStackIcon} alt="Full Stack Dev Icon" className="badge-icon" />
                        <div className="badge-text">Full Stack Dev</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default P5PartnerInfo;
