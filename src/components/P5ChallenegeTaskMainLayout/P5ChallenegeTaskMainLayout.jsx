import React from 'react';
import ChallengeTaskHeader from '../ChallengeTaskHeader/ChallengeTaskHeader';
import ChallengeProfileSideBar from '../ChallengeProfileSideBar/ChallengeProfileSideBar';
import P5ChallengeTaskStepper from '../P5ChallengeTaskStepper/P5ChallengeTaskStepper';
import './P5ChallenegeTaskMainLayout.scss';

const P5ChallengeTaskMainLayout = () => {
    return (
        <div className="main-layout-container">
            {/* Left Section: Challenge Task Header and Stepper */}
            <div className="left-section">
                <ChallengeTaskHeader />
                Stepper component
                <P5ChallengeTaskStepper />
            </div>

            {/* Right Section: Profile Display */}
            <div className="right-section">
                <ChallengeProfileSideBar />
            </div>
        </div>
    );
};

export default P5ChallengeTaskMainLayout;
