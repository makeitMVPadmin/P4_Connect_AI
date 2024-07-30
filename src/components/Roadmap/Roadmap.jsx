import React, { useState } from "react";
import "./Roadmap.scss";
import { ReactComponent as RoadmapSvg } from "../../assets/images/roadmapBackground.svg";
import { ReactComponent as Goal1Icon } from "../../assets/icons/roadmapIcon1.svg";
import { ReactComponent as Goal2Icon } from "../../assets/icons/roadmapIcon2.svg";
import { ReactComponent as Goal3Icon } from "../../assets/icons/roadmapIcon3.svg";
import { ReactComponent as Goal4Icon } from "../../assets/icons/roadmapIcon4.svg";
import { ReactComponent as Goal5Icon } from "../../assets/icons/roadmapIcon5.svg";
import Goal1Component from "../Goal1Component/Goal1Component";
import Goal2Component from "../Goal2Component/Goal2Component";
import Modal from 'react-modal';
import { PopUpModal, PopUpStyle } from "../../components/PopUpModal/PopUpModal";
import Button from "../../components/Button/Button";

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

  const renderActiveComponent = () => {
    switch (activeGoal) {
      case 1:
        return <Goal1Component />;
      case 2:
        return <Goal2Component />;
      default:
        return null;
    }
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
          <PopUpModal
            title={{ title: "goal breakdown" }}
            closeButtonAction={handleCloseGoalClickModal}
          >
            hello this is the goal breakdown
            {/* <Button className="successMessage__linkedin-btn" onClick={handleCloseGoalClickModal}>
            X
          </Button> */}
          </PopUpModal>
        </>
      </Modal>
    );
  }
  return (
    <div className="roadmap-container">
      <div className="svg-container">

        <RoadmapSvg />
        {renderModalComponent()}
        <button
          className="goal-button goal1"
          onClick={() => handleGoalClickModal()}
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
      <div className="active-goal-container">{renderActiveComponent()}</div>
    </div>
  );
};

export default Roadmap;
