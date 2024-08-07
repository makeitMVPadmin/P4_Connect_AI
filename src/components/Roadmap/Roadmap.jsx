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

const Roadmap = () => {
  const [activeGoal, setActiveGoal] = useState(null);
  const [isModalOpen, setmodalOpen] = useState(false);

  const [hovering, setHovering] = useState(null);

  const [user1Pic, setUser1Pic] = useState(user1Picture); //replace user1 with null instead of image placeholder
  const [user2Pic, setUser2Pic] = useState(user2Picture); //replace user2 with null instead of image placeholder

  const [user1Name, setUser1Name] = useState("User1");
  const [user2Name, setUser2Name] = useState("User2");
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const [goals, setGoals] = useState(null);
  const [loadingPage, setLoadingPage] = useState(true);

  // if (goals){
  //   setLoadingPage(true);
  // }
  useEffect(() => { 
    console.log("aicall");
    const aiApiCallData = async () => {
      console.log("aicall111");

      const userA = { firstName: "Alice", skills: ["JavaScript", "React"] };
      const userB = { firstName: "Bob", skills: ["Python", "Django"] };
      const project = "building a web application";

      try {
        console.log("aicall122");

        const data = await callOpenAiApi(userA, userB, project);
        console.log(data.goals);
        setGoals(data.goals);
        setLoadingPage(false);
        // console.log("loading");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    aiApiCallData();
  }, []);

  // CALL BACKEND FUNCTION: Get Matches
  // Use the data of only the most recent match

  // CALL BACKEND FUNCTION: Get User
  // Get both users based on user id from the match table

  // CALL BACKEND FUNCTION: Get UserGoalCompletion
  // Get UserGoalCompletion data with match id (all 5 records)

  // CALL BACKEND FUNCTION: Get Goals
  // Get Goals from UserGoalCompletion goal id

  // CALL BACKEND FUNCTION: Get UserSubtaskCompletion
  // Get UserSubtaskCompletion data with goal id (all 5 records)

  // CALL BACKEND FUNCTION: Get Subtasks
  // Get Goals from UserSubtaskCompletion subtask id

  // This object is temporary and only here to provide mock data to show the functionality of the popup
  const mockMatchData = {
    goal1Task: "Goal 1 task",
    goal2Task: "Goal 2 task",
    goal3Task: "Goal 3 task",
    goal4Task: "Goal 4 task",
    goal5Task: "Goal 5 task",
    user1Picture: user1Picture,
    user2Picture: user2Picture,
  };

  useEffect(() => {
    // Simulating data fetch from backend
    setTimeout(() => {
      setUser1Name("Diana");
      setUser2Name("Kerry");
      setCompletionPercentage(20);
    }, 1000);
  }, []);

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

  if (loadingPage){
    return (
      <div className="roadmap-container">
        <LoadingPage/>
      </div>
    )
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
              task={mockMatchData.goal1Task}
              locked={false}
              user1Complete={true}
              user2Complete={false}
              user1Picture={mockMatchData.user1Picture}
              user2Picture={mockMatchData.user2Picture}
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
              task={mockMatchData.goal2Task}
              locked={true}
              user1Complete={false}
              user2Complete={false}
              user1Picture={mockMatchData.user1Picture}
              user2Picture={mockMatchData.user2Picture}
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
              task={mockMatchData.goal3Task}
              locked={true}
              user1Complete={false}
              user2Complete={false}
              user1Picture={mockMatchData.user1Picture}
              user2Picture={mockMatchData.user2Picture}
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
              number={34}
              task={mockMatchData.goal4Task}
              locked={true}
              user1Complete={false}
              user2Complete={false}
              user1Picture={mockMatchData.user1Picture}
              user2Picture={mockMatchData.user2Picture}
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
              task={mockMatchData.goal5Task}
              locked={true}
              user1Complete={false}
              user2Complete={false}
              user1Picture={mockMatchData.user1Picture}
              user2Picture={mockMatchData.user2Picture}
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
