import React, { useState, useEffect } from "react";
import "./Roadmap.scss";
import { ReactComponent as RoadmapSvg } from "../../assets/images/roadmapBackground.svg";
import { ReactComponent as Goal1Icon } from "../../assets/icons/roadmapIcon1.svg";
import { ReactComponent as Goal2Icon } from "../../assets/icons/roadmapIcon2.svg";
import { ReactComponent as Goal3Icon } from "../../assets/icons/roadmapIcon3.svg";
import { ReactComponent as Goal4Icon } from "../../assets/icons/roadmapIcon4.svg";
import { ReactComponent as Goal5Icon } from "../../assets/icons/roadmapIcon5.svg";
import Modal from "react-modal";
import { goalsData } from "../../goalData";
import { PopUpModal } from "../../components/PopUpModal/PopUpModal";
import GoalComponent from "../GoalComponent/GoalComponent";
import GoalPopup from "../GoalPopup/GoalPopup";
import GoalAchieved from "../GoalAchieved/GoalAchieved";
import user1Picture from "../../assets/images/user1.svg";
import user2Picture from "../../assets/images/user2.svg";
import LoadingPage from "../LoadingPage/LoadingPage";
import ConfettiExplosion from "react-confetti-explosion";

const Roadmap = ({ setCurrentPage }) => {
  const [activeGoal, setActiveGoal] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [hovering, setHovering] = useState(null);
  const [user1Name] = useState("Diana");
  const [user2Name] = useState("Kerry");
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [loadingPage, setLoadingPage] = useState(true);
  const [isExploding, setIsExploding] = useState(false);
  const [savedGoals, setSavedGoals] = useState({
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
  });
  const [activeGoalNumber, setActiveGoalNumber] = useState(1);
  const [showGoalAchieved, setShowGoalAchieved] = useState(false);
  const [goalAchievedOnce, setGoalAchievedOnce] = useState({});
  const [completedSubtasks, setCompletedSubtasks] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  const handleGoalClickModal = (goalNumber) => {
    if (goalNumber <= activeGoalNumber) {
      setActiveGoal(goalNumber);
      setModalOpen(true);
    }
  };

  const handleCloseGoalClickModal = () => {
    setModalOpen(false);
    setActiveGoal(null);
    setIsExploding(false);
  };
useEffect(()=>{
  const totalSubtasks = goalsData.reduce(
    (acc, goal) => acc + goal.subtasks.length,
    0
  );
  const newPercentage = Math.round((completedSubtasks / totalSubtasks) * 100);
  setCompletionPercentage(newPercentage);
},[goalsData,completedSubtasks])


  const handleSaveChanges = (goalNumber, subtasks) => {
    setSavedGoals((prev) => {
      const newSavedGoals = {
        ...prev,
        [goalNumber]: subtasks,
      };
      console.log(newSavedGoals);
      const theSubtask = Object.values(newSavedGoals).reduce(
        (acc, goal) =>
          acc + Object.values(goal).filter((value) => value === true).length,
        0
      );
      setCompletedSubtasks(theSubtask);
      console.log("completedSubtasks inside savedGoals", theSubtask);
      return newSavedGoals;
    });


    const totalSubtasksForGoal = goalsData[goalNumber - 1].subtasks.length;
    const completedSubtasksForGoal =
      Object.values(subtasks).filter(Boolean).length;
    const allSubtasksCompleted =
      completedSubtasksForGoal === totalSubtasksForGoal;

    if (allSubtasksCompleted) {
      if (goalNumber === 5) {
        setShowGoalAchieved(true);
      } else if (!goalAchievedOnce[goalNumber]) {
        setActiveGoalNumber(activeGoalNumber + 1);
        setGoalAchievedOnce((prev) => ({
          ...prev,
          [goalNumber]: true,
        }));
      }
    }

    // Update completion percentage

    setIsExploding(true);
    
    setModalOpen(false);
    setActiveGoal(null);
    setTimeout(() => {
      setIsExploding(false);
    }, 1000);
  };

  const handleCloseGoalAchieved = () => {
    console.log("Closing GoalAchieved overlay");
    setIsExploding(false);
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

  if (loadingPage) {
    return (
      <div className="roadmap-container">
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="roadmap-container">
      <div className="svg-container">
        <RoadmapSvg />
        <div className="goals-progress-box">
          <div className="goals-progress-content">
            {user1Name}'s and {user2Name}'s partnership:
          </div>
          <div className="goals-progress-percentage">
            {/* confetti explosion */}
            {isExploding && <ConfettiExplosion particleCount={120} />}
            {/* {(completionPercentage >= 100) && isExploding &&
              <ConfettiExplosion
                particleCount={350}
              />} */}
            {completionPercentage}% completed
          </div>
        </div>

        <div className="svg-container__matched">
          <div className="svg-container__matched__images">
            <img
              src={user1Picture}
              alt="user1 avatar "
              className="svg-container__matched__user"
            />
            <img
              src={user2Picture}
              alt="user2 avatar "
              className="svg-container__matched__user"
            />
          </div>
        </div>

        {renderModalComponent()}

        {goalsData.map((goalNumber) => (
          <button
            key={goalNumber.goal_num}
            onMouseEnter={() => {
              setHovering(goalNumber.goal_num);
            }}
            onMouseLeave={() => {
              setHovering(null);
            }}
            className={`goal-button goal${goalNumber.goal_num} ${
              goalNumber.goal_num <= activeGoalNumber ? "clickable" : "locked"
            }`}
            onClick={() => handleGoalClickModal(goalNumber.goal_num)}
          >
            {hovering === goalNumber.goal_num && (
              <GoalPopup
                offsetX={`${9.5 - goalNumber.goal_num * 1.1}rem`}
                offsetY={`${9.5 - goalNumber.goal_num * 1.1}rem`}
                number={goalNumber.goal_num}
                task={goalNumber.goalTask}
                locked={!(goalNumber.goal_num <= activeGoalNumber)}
                user1Complete={goalNumber.goal_num < activeGoalNumber}
                user2Complete={goalNumber.goal_num < activeGoalNumber}
                user1Picture={user1Picture}
                user2Picture={user2Picture}
              />
            )}
            <div
              className={`goal-icon-container ${getGoalClassName(
                goalNumber.goal_num
              )}`}
            >
              {goalNumber.goal_num === 1 && <Goal1Icon />}
              {goalNumber.goal_num === 2 && <Goal2Icon />}
              {goalNumber.goal_num === 3 && <Goal3Icon />}
              {goalNumber.goal_num === 4 && <Goal4Icon />}
              {goalNumber.goal_num === 5 && <Goal5Icon />}
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
