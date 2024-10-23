import React from 'react';
import './P5ChallengeTaskStepper.scss';

const P5ChallengeTaskStepper = () => {
    return (
        <div className="task-stepper-container">
            {/* Connect with Partner Button */}
            <div className="step-button">
                <div className="button-text">Connect with Partner</div>
            </div>

            {/* Task Details */}
            <div className="task-details">
                {/* LinkedIn Section */}
                <div className="task-section">
                    <div className="section-title">LinkedIn</div>
                    <div className="section-description">
                        Connect with your partner by using the LinkedIn button located in the right tab next to “Connect.”
                        <br />
                        Alternatively, you can look them up by their username.
                    </div>
                </div>

                {/* Google Meet Section */}
                <div className="task-section">
                    <div className="section-title">Google Meet</div>
                    <div className="section-description">
                        Use the Google Meet button in the right tab next to “Connect.” This will direct you to Google Meet, where a meeting template will be prefilled, making it easier to schedule a session with your partner.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default P5ChallengeTaskStepper;
