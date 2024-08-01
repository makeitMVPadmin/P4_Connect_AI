import React, { useState } from "react";
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

const Roadmap = () => {
  const [activeGoal, setActiveGoal] = useState(null);
  const [isModalOpen, setmodalOpen] = useState(false);

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
              goalPrompt={
                "We recommend setting up an initial meeting to get to know each other and plan your first steps."
              }
              goals={{
                goalBreakdownLabel: { meetings1: "" },
                goalLabel: "meeting",
              }}
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
        {renderModalComponent()}
        <button
          className="goal-button goal1"
          onClick={() => handleGoalClickModal(1)}
        >
          <Goal1Icon />
        </button>
        <button
          className="goal-button goal2"
          onClick={() => handleGoalClickModal(2)}
        >
          <Goal2Icon />
        </button>
        <button
          className="goal-button goal3"
          onClick={() => handleGoalClickModal(3)}
        >
          <Goal3Icon />
        </button>
        <button
          className="goal-button goal4"
          onClick={() => handleGoalClickModal(4)}
        >
          <Goal4Icon />
        </button>
        <button
          className="goal-button goal5"
          onClick={() => handleGoalClickModal(5)}
        >
          <Goal5Icon />
        </button>
      </div>
      {/* <div className="active-goal-container">{renderActiveComponent()}</div> */}
    </div>
  );
};

export default Roadmap;
