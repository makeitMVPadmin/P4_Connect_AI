import React, { useState, useEffect } from "react";
import "./Roadmap.scss";
import { ReactComponent as RoadmapSvg } from "../../assets/images/roadmapBackground.svg";
import { ReactComponent as Goal1Icon } from "../../assets/icons/roadmapIcon1.svg";
import { ReactComponent as Goal2Icon } from "../../assets/icons/roadmapIcon2.svg";
import { ReactComponent as Goal3Icon } from "../../assets/icons/roadmapIcon3.svg";
import { ReactComponent as Goal4Icon } from "../../assets/icons/roadmapIcon4.svg";
import { ReactComponent as Goal5Icon } from "../../assets/icons/roadmapIcon5.svg";
import Modal from "react-modal";
import { PopUpModal, PopUpStyle } from "../../components/PopUpModal/PopUpModal";
import GoalComponent from "../GoalComponent/GoalComponent";
import GoalPopup from "../GoalPopup/GoalPopup";
import user1Picture from "../../assets/images/user1.png";
import user2Picture from "../../assets/images/user2.png";
import { callOpenAiApi } from "../../utils/Functions/openaiFunctions";
import LoadingPage from "../LoadingPage/LoadingPage";
import { GOALS_DATA, MOCK_MATCH_DATA } from "../../mock-data/roadmapMockData";

const Roadmap = () => {
  const [activeGoal, setActiveGoal] = useState(null);
  const [isModalOpen, setmodalOpen] = useState(false);

  const [hovering, setHovering] = useState(null);

  const [user1Name, setUser1Name] = useState("User1");
  const [user2Name, setUser2Name] = useState("User2");
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const handleGoalClickModal = (goalNumber) => {
    setActiveGoal(goalNumber);
    setmodalOpen(true);
  };

  const handleCloseGoalClickModal = () => {
    setmodalOpen(false);
  };

  const renderModalComponent = () => {
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
        <>
          <PopUpModal title={{}} closeButtonAction={handleCloseGoalClickModal}>
            <GoalComponent
              goalNumber={activeGoal}
              goalPrompt={activeGoal && GOALS_DATA[activeGoal - 1].goal}
              subtasks={activeGoal && GOALS_DATA[activeGoal - 1].subtasks}
            ></GoalComponent>
          </PopUpModal>
        </>
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
        <button
          onMouseEnter={() => {
            setHovering(1);
          }}
          onMouseLeave={() => {
            setHovering(null);
          }}
          className="goal-button goal1"
          onClick={() => handleGoalClickModal(1)}
        >
          {hovering === 1 && (
            <GoalPopup
              offsetX={"8.4rem"}
              offsetY={"8.4rem"}
              number={1}
              task={MOCK_MATCH_DATA.goal1Task}
              locked={false}
              user1Complete={true}
              user2Complete={false}
              user1Picture={user1Picture}
              user2Picture={user2Picture}
            />
          )}
          <div className="goal-icon-container">
            <Goal1Icon />
          </div>
        </button>
        <button
          onMouseEnter={() => {
            setHovering(2);
          }}
          onMouseLeave={() => {
            setHovering(null);
          }}
          className="goal-button goal2"
          onClick={() => handleGoalClickModal(2)}
        >
          {hovering === 2 && (
            <GoalPopup
              offsetX={"7.3rem"}
              offsetY={"7.3rem"}
              number={2}
              task={MOCK_MATCH_DATA.goal2Task}
              locked={true}
              user1Complete={false}
              user2Complete={false}
              user1Picture={user1Picture}
              user2Picture={user2Picture}
            />
          )}
          <div className="goal-icon-container">
            <Goal2Icon />
          </div>
        </button>
        <button
          onMouseEnter={() => {
            setHovering(3);
          }}
          onMouseLeave={() => {
            setHovering(null);
          }}
          className="goal-button goal3"
          onClick={() => handleGoalClickModal(3)}
        >
          {hovering === 3 && (
            <GoalPopup
              offsetX={"6.1rem"}
              offsetY={"6.1rem"}
              number={3}
              task={MOCK_MATCH_DATA.goal3Task}
              locked={true}
              user1Complete={false}
              user2Complete={false}
              user1Picture={user1Picture}
              user2Picture={user2Picture}
            />
          )}
          <div className="goal-icon-container">
            <Goal3Icon />
          </div>
        </button>
        <button
          onMouseEnter={() => {
            setHovering(4);
          }}
          onMouseLeave={() => {
            setHovering(null);
          }}
          className="goal-button goal4"
          onClick={() => handleGoalClickModal(4)}
        >
          {hovering === 4 && (
            <GoalPopup
              offsetX={"4.95rem"}
              offsetY={"4.95rem"}
              number={4}
              task={MOCK_MATCH_DATA.goal4Task}
              locked={true}
              user1Complete={false}
              user2Complete={false}
              user1Picture={user1Picture}
              user2Picture={user2Picture}
            />
          )}
          <div className="goal-icon-container">
            <Goal4Icon />
          </div>
        </button>
        <button
          onMouseEnter={() => {
            setHovering(5);
          }}
          onMouseLeave={() => {
            setHovering(null);
          }}
          className="goal-button goal5"
          onClick={() => handleGoalClickModal(5)}
        >
          {hovering === 5 && (
            <GoalPopup
              offsetX={"3.7rem"}
              offsetY={"3.7rem"}
              number={5}
              task={MOCK_MATCH_DATA.goal5Task}
              locked={true}
              user1Complete={false}
              user2Complete={false}
              user1Picture={user1Picture}
              user2Picture={user2Picture}
            />
          )}
          <div className="goal-icon-container">
            <Goal5Icon />
          </div>
        </button>
      </div>
      {/* <div className="active-goal-container">{renderActiveComponent()}</div> */}
    </div>
  );
};

export default Roadmap;
