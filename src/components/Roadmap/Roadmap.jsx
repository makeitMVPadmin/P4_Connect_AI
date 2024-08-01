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
import GoalPopup from "../GoalPopup/GoalPopup";
import user1Picture from "../../assets/images/user1.png";
import user2Picture from "../../assets/images/user2.png";

const Roadmap = () => {
  const [activeGoal, setActiveGoal] = useState(null);
  const [isModalOpen, setmodalOpen] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

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
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(true);
          }}
          className="goal-button goal1"
          onClick={() => handleGoalClickModal(1)}
        >
          {isHovering && (
            <GoalPopup
              offsetX={"8.4rem"}
              offsetY={"8.4rem"}
              number={"1"}
              task={
                "Do some stuffs because that is the stuff you are supposed to do "
              }
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
          className="goal-button goal2"
          onClick={() => handleGoalClickModal(2)}
        >
          <GoalPopup offsetX={"10rem"} offsetY={"10rem"} />
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
