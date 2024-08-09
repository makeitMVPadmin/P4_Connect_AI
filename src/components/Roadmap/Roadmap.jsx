import React, { useState, useEffect } from "react";
import "./Roadmap.scss";
import { ReactComponent as RoadmapSvg } from "../../assets/images/roadmapBackground.svg";
import { ReactComponent as Goal1Icon } from "../../assets/icons/roadmapIcon1.svg";
import { ReactComponent as Goal2Icon } from "../../assets/icons/roadmapIcon2.svg";
import { ReactComponent as Goal3Icon } from "../../assets/icons/roadmapIcon3.svg";
import { ReactComponent as Goal4Icon } from "../../assets/icons/roadmapIcon4.svg";
import { ReactComponent as Goal5Icon } from "../../assets/icons/roadmapIcon5.svg";
import Modal from "react-modal";
import { PopUpModal } from "../../components/PopUpModal/PopUpModal";
import GoalComponent from "../GoalComponent/GoalComponent";
import GoalPopup from "../GoalPopup/GoalPopup";
import GoalAchieved from "../GoalAchieved/GoalAchieved";
import user1Picture from "../../assets/images/user1.svg";
import user2Picture from "../../assets/images/user2.svg";

const Roadmap = ({ setCurrentPage }) => {
  const [activeGoal, setActiveGoal] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [hovering, setHovering] = useState(null);
  const [user1Pic] = useState(user1Picture);
  const [user2Pic] = useState(user2Picture);
  const [user1Name] = useState("Diana");
  const [user2Name] = useState("Kerry");
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [savedGoals, setSavedGoals] = useState({
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
  });
  const [activeGoalNumber, setActiveGoalNumber] = useState(1);
  const [showGoalAchieved, setShowGoalAchieved] = useState(false);

  const goalsData = [
    {
      goal: "Attend 4 meetings",
      subtasks: [
        "Schedule & attend 1 accountability meeting",
        "Attend 2 accountability meetings",
        "Attend 3 accountability meetings",
        "Attend all 4 accountability meetings",
      ],
    },
    {
      goal: "Design and implement the frontend of the web application using JavaScript and React",
      subtasks: [
        "Discuss and finalize the UI/UX design for the application",
        "Break down the design into reusable React components",
        "Implement the React components using JavaScript",
        "Test the components individually and as a whole to ensure they work as expected",
      ],
    },
    {
      goal: "Develop the backend of the web application using Python and Django",
      subtasks: [
        "Design the database schema and establish the necessary Django models",
        "Implement the necessary views and templates in Django",
        "Integrate the Django backend with the React frontend",
        "Test the backend functionality and ensure it works with the frontend",
      ],
    },
    {
      goal: "Deploy the web application",
      subtasks: [
        "Choose a suitable hosting platform for the application",
        "Configure the deployment settings for both frontend and backend",
        "Deploy the application and test it in the production environment",
        "Monitor the application performance and fix any issues that arise",
      ],
    },
    {
      goal: "Attend 4 meetings to go over what you’ve learned",
      subtasks: [
        "Schedule & attend 1 accountability meeting",
        "Attend 2 accountability meetings",
        "Attend 3 accountability meetings",
        "Attend all 4 accountability meetings",
      ],
    },
  ];

  const mockMatchData = {
    goal1Task: "Goal 1 task",
    goal2Task: "Goal 2 task",
    goal3Task: "Goal 3 task",
    goal4Task: "Goal 4 task",
    goal5Task: "Goal 5 task",
    user1Picture: user1Picture,
    user2Picture: user2Picture,
  };

  const handleGoalClickModal = (goalNumber) => {
    if (isGoalClickable(goalNumber)) {
      setActiveGoal(goalNumber);
      setModalOpen(true);
    }
  };

  const handleCloseGoalClickModal = () => {
    setModalOpen(false);
    setActiveGoal(null);
  };

  const handleSaveChanges = (goalNumber, subtasks) => {
    setSavedGoals((prev) => {
      const newSavedGoals = {
        ...prev,
        [goalNumber]: subtasks,
      };
      return newSavedGoals;
    });

    // Check if all subtasks for the current goal are completed
    const totalSubtasksForGoal = goalsData[goalNumber - 1].subtasks.length;
    const completedSubtasksForGoal =
      Object.values(subtasks).filter(Boolean).length;
    const allSubtasksCompleted =
      completedSubtasksForGoal === totalSubtasksForGoal;

    if (allSubtasksCompleted) {
      if (goalNumber === 5) {
        setShowGoalAchieved(true);
      } else {
        setActiveGoalNumber((prev) => {
          const next = Math.min(prev + 1, 5);
          return next;
        });
      }
    }

    // Update completion percentage
    const totalSubtasks = goalsData.reduce(
      (acc, goal) => acc + goal.subtasks.length,
      0
    );
    const completedSubtasks =
      Object.values(savedGoals).reduce(
        (acc, goal) => acc + Object.values(goal).filter(Boolean).length,
        0
      ) + completedSubtasksForGoal;

    const newPercentage = Math.round((completedSubtasks / totalSubtasks) * 100);
    setCompletionPercentage(newPercentage);

    setModalOpen(false);
    setActiveGoal(null);
  };

  const handleCloseGoalAchieved = () => {
    console.log("Closing GoalAchieved overlay");
    setShowGoalAchieved(false);
  };

  const handleRetakeQuiz = () => {
    setShowGoalAchieved(false);
    setCurrentPage("quiz");
  };

  const getGoalClassName = (goalNumber) => {
    if (goalNumber === activeGoalNumber) {
      return "goal-icon active";
    } else if (goalNumber < activeGoalNumber) {
      return "goal-icon completed";
    } else {
      return "goal-icon upcoming";
    }
  };

  const isGoalClickable = (goalNumber) => {
    const clickable = goalNumber <= activeGoalNumber;
    return clickable;
  };

  const renderModalComponent = () => {
    if (!activeGoal) return null;

    return (
      <Modal
        id="promptpage__linkedinpost-modal"
        isOpen={isModalOpen}
        onRequestClose={handleCloseGoalClickModal}
        ariaHideApp={false}
        className="modalStyle"
        overlayClassName="modalOverlay"
        shouldCloseOnOverlayClick={false}
      >
        <PopUpModal title={{}} closeButtonAction={handleCloseGoalClickModal}>
          <GoalComponent
            goalNumber={activeGoal}
            goalPrompt={goalsData[activeGoal - 1].goal}
            subtasks={goalsData[activeGoal - 1].subtasks}
            onSaveChanges={handleSaveChanges}
            savedProgress={savedGoals[activeGoal]}
            onClose={handleCloseGoalClickModal}
          />
        </PopUpModal>
      </Modal>
    );
  };

  return (
    <div className="roadmap-container">
      <div className="svg-container">
        <RoadmapSvg />
        <div className="goals-progress-box">
          <div className="goals-progress-content">
            {user1Name}'s and {user2Name}'s partnership:
          </div>
          <div className="goals-progress-percentage">
            {completionPercentage}% completed
          </div>
        </div>

        <div className="svg-container__matched">
          <div className="svg-container__matched__images">
            <img
              src={user1Pic}
              alt="user1 avatar "
              className="svg-container__matched__user"
            />
            <img
              src={user2Pic}
              alt="user2 avatar "
              className="svg-container__matched__user"
            />
          </div>
        </div>

        {renderModalComponent()}

        {[1, 2, 3, 4, 5].map((goalNumber) => (
          <button
            key={goalNumber}
            onMouseEnter={() => {
              setHovering(goalNumber);
            }}
            onMouseLeave={() => {
              setHovering(null);
            }}
            className={`goal-button goal${goalNumber} ${
              isGoalClickable(goalNumber) ? "clickable" : "locked"
            }`}
            onClick={() => handleGoalClickModal(goalNumber)}
          >
            {hovering === goalNumber && (
              <GoalPopup
                offsetX={`${9.5 - goalNumber * 1.1}rem`}
                offsetY={`${9.5 - goalNumber * 1.1}rem`}
                number={goalNumber}
                task={mockMatchData[`goal${goalNumber}Task`]}
                locked={!isGoalClickable(goalNumber)}
                user1Complete={goalNumber < activeGoalNumber}
                user2Complete={goalNumber < activeGoalNumber}
                user1Picture={mockMatchData.user1Picture}
                user2Picture={mockMatchData.user2Picture}
              />
            )}
            <div
              className={`goal-icon-container ${getGoalClassName(goalNumber)}`}
            >
              {goalNumber === 1 && <Goal1Icon />}
              {goalNumber === 2 && <Goal2Icon />}
              {goalNumber === 3 && <Goal3Icon />}
              {goalNumber === 4 && <Goal4Icon />}
              {goalNumber === 5 && <Goal5Icon />}
            </div>
          </button>
        ))}
      </div>

      {showGoalAchieved && (
        <div className="goal-achieved-overlay">
          <GoalAchieved
            onClose={handleCloseGoalAchieved}
            onRetakeQuiz={handleRetakeQuiz}
          />
        </div>
      )}
    </div>
  );
};

export default Roadmap;
