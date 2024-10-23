import React from 'react';
import './ChallengeTaskHeader.scss'; // We'll add styles here

const ChallengeTaskHeader = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <h1 className="header-title">Interactive Card Component with JavaScript</h1>
                <p className="header-description">
                    In this challenge, you will create an interactive card component that displays additional information when clicked. 
                    You will be paired with a partner to review each other's code and provide suggestions for improvement. 
                    The focus is on writing clean, modular code and improving your understanding of DOM manipulation.
                </p>
            </div>
        </div>
    );
}

export default ChallengeTaskHeader;
