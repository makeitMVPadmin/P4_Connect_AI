import React from 'react';
import P5PartnerInfo from '../P5PartnerInfo/P5PartnerInfo';
import StatusStarted from '../StatusStarted/StatusStarted';
import P5ConnectSection from '../P5ConnectSection/P5ConnectSection';
import P5ChallengeTaskTimer from '../P5ChallengeTaskTimer/P5ChallengeTaskTimer';
import './ChallengeProfileSideBar.scss';

const ChallengeProfileSideBar = () => {
    return (
        <div className="challenge-profile-container">
        {/* Challenge Task Timer */}
        <div className="challenge-task-timer">
            <P5ChallengeTaskTimer />
        </div>

        {/* Status Section */}
        <div className="status-section">
            <StatusStarted />
        </div>

        {/* Partner Info Section */}
        <div className="partner-info-section">
            <P5PartnerInfo />
        </div>

        {/* Connect Section */}
        <div className="connect-section">
            <P5ConnectSection />
        </div>
    </div>
    );
};

export default ChallengeProfileSideBar;
