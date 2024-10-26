import React from 'react';
import "./TaskStepper.scss";


const TaskStepper = () => {
    return (
      <div className="card-container">
        {/* First Card - Blue Button */}
        <div className="card">
          <button className="button blue">Connect with Partner</button>
          <div className="task-section">
            <div className="section-header">LinkedIn</div>
            <div className="section-description">
              After building your component, input your code into the designated
              User Code section and click Submit.
            </div>
          </div>
          <div className="task-section">
            <div className="section-header">Review Partner's Code</div>
            <div className="section-description">
              Use HTML to structure the card with an image, title, description, and
              hidden section for additional text. Style the card using CSS (e.g.,
              background color, padding, shadows, etc.). Write JavaScript to toggle
              the hidden text when the card is clicked.
            </div>
          </div>
          <div className="task-section">
            <div className="section-header">Finalize Component</div>
            <div className="section-description">
              Discuss and apply any feedback with your partner to refine your
              components. Make sure everything works smoothly. Click Complete once
              both of you are satisfied with the final version.
            </div>
          </div>
        </div>
  
        {/* Second Card - Green Button */}
        <div className="card">
          <button className="button green">Connect with Partner</button>
          <div className="task-section">
            <div className="section-header">LinkedIn</div>
            <div className="section-description">
              After building your component, input your code into the designated
              User Code section and click Submit.
            </div>
          </div>
          <div className="task-section">
            <div className="section-header">Review Partner's Code</div>
            <div className="section-description">
              Use HTML to structure the card with an image, title, description, and
              hidden section for additional text. Style the card using CSS (e.g.,
              background color, padding, shadows, etc.). Write JavaScript to toggle
              the hidden text when the card is clicked.
            </div>
          </div>
          <div className="task-section">
            <div className="section-header">Finalize Component</div>
            <div className="section-description">
              Discuss and apply any feedback with your partner to refine your
              components. Make sure everything works smoothly. Click Complete once
              both of you are satisfied with the final version.
            </div>
          </div>
        </div>
  
        {/* Third Card - Ash Button */}
        <div className="card">
          <button className="button ash">Connect with Partner</button>
          <div className="task-section">
            <div className="section-header">LinkedIn</div>
            <div className="section-description">
              After building your component, input your code into the designated
              User Code section and click Submit.
            </div>
          </div>
          <div className="task-section">
            <div className="section-header">Review Partner's Code</div>
            <div className="section-description">
              Use HTML to structure the card with an image, title, description, and
              hidden section for additional text. Style the card using CSS (e.g.,
              background color, padding, shadows, etc.). Write JavaScript to toggle
              the hidden text when the card is clicked.
            </div>
          </div>
          <div className="task-section">
            <div className="section-header">Finalize Component</div>
            <div className="section-description">
              Discuss and apply any feedback with your partner to refine your
              components. Make sure everything works smoothly. Click Complete once
              both of you are satisfied with the final version.
            </div>
          </div>
        </div>
      </div>
    );
  };

export default TaskStepper;
