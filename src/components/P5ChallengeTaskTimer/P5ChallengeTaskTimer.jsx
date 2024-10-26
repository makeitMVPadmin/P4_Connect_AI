import React from 'react';
import './P5ChallengeTaskTimer.scss';
import Pen from '../../assets/images/Pen.png';
import Clock from '../../assets/images/Clock.png';
import Idea from '../../assets/images/Idea.png';

const P5ChallengeTaskTimer = () => {
    return (
        <div className="task-timer-wrapper">
            {/* Task: Code */}
            <div className="task-item">
                <img src={Pen} alt="Pen Icon" className="task-icon" />
                <div className="task-text">Code</div>
            </div>

            {/* Task Duration: 60-90 min */}
            <div className="task-item">
                <img src={Clock} alt="Clock Icon" className="task-icon" />
                <div className="task-text">60-90 min</div>
            </div>

            {/* Technologies: HTML · CSS · JavaScript */}
            <div className="task-item">
                <img src={Idea} alt="Idea Icon" className="task-icon" />
                <div className="task-text">HTML · CSS · JavaScript</div>
            </div>
        </div>
    );
}

export default P5ChallengeTaskTimer;
