import React from 'react';
import './P5ConnectSection.scss';
import googleMeetIcon from '../../assets/images/icons8-google-meet-96 1.jpg';
import linkedinIcon from '../../assets/images/u_linkedin.jpg';

const P5ConnectSection = () => {
    return (
        <div className="connect-section">
            <div className="connect-title">Connect</div>
            <div className="connect-buttons">
                {/* LinkedIn Button */}
                <div className="connect-button">
                    <img src={linkedinIcon} alt="LinkedIn" className="connect-icon" />
                    <div className="connect-text">Kate-Tanner</div>
                </div>

                {/* Google Meet Button */}
                <div className="connect-button">
                    <img src={googleMeetIcon} alt="Google Meet" className="connect-icon" />
                    <div className="connect-text">vww-snqc-ynw</div>
                </div>
            </div>
        </div>
    );
};

export default P5ConnectSection;
