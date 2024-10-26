import React from 'react';
import './StatusStarted.scss';

const StatusStarted = () => {
    return (
        <div className="status-wrapper">
            {/* Status Title */}
            <div className="status-title">Status</div>
            {/* Status Box */}
            <div className="status-container">
                <div className="status-text">Started</div>
            </div>
        </div>
    );
}

export default StatusStarted;
