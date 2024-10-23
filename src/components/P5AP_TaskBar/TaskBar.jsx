import React, { useState } from 'react';
import "./TaskBar.scss";

const TaskBar = () => {
    const [ steps, setSteps ] = setSteps([
        { id: 1, completed: false },
        { id: 2, completed: false },
        { id: 3, completed: false }
    ]);

const handleStepClick = (id) => {
    setSteps(prevSteps => prevSteps.map(step => step.id === id ? { ...step, completed: !step.completed } : step));
};

return (
        <div className="task-bar">
            <h2>Task List</h2>
<ul>
    {steps.map(step => (
        <li key={step.id}>
        <button onClick={() => handleStepClick(step.id)}>
            {step.completed ? <span className="checkmark">&#x2713;</span> : <span className="circle">&#9711;</span>}
        </button>
        Step {step.id}
        </li>
    ))}
</ul>
</div>
    );
}

export default TaskBar;