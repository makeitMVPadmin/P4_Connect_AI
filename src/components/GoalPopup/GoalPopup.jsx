import "./GoalPopup.scss";
import hat from "../../assets/images/makeitMVP-hat.svg";

const GoalPopup = ({
  number,
  task,
  locked,
  user1Picture,
  user2Picture,
  user1Complete,
  user2Complete,
  offsetX,
  offsetY,
}) => {
  const offsetVariables = {
    "--x-offset": offsetX,
    "--y-offset": offsetY,
  };

  return (
    <div
      className={`goal-popup ${locked ? "goal-popup--locked" : ""}`}
      style={offsetVariables}
    >
      <h2 className="goal-popup__title">{`GOAL ${number}`}</h2>
      <h3
        className={`goal-popup__task ${
          locked ? "goal-popup__task--locked" : ""
        }`}
      >
        {task}
      </h3>
      {!locked && (
        <div className="goal-popup__users-container">
          <div className="goal-popup__user-container">
            <img
              className="goal-popup__hat"
              src={hat}
              alt="makeitMVP hat"
            ></img>
            <img
              className="goal-popup__user-picture"
              src={user1Picture}
              alt="user 1 profile"
            ></img>
            <h4 className="goal-popup__user-completed-text">
              {user1Complete ? "Completed" : "Incomplete"}
            </h4>
          </div>
          <div className="goal-popup__user-container">
            <img
              className="goal-popup__hat"
              src={hat}
              alt="makeitMVP hat"
            ></img>
            <img
              className="goal-popup__user-picture"
              src={user2Picture}
              alt="user 2 profile"
            ></img>
            <h4 className="goal-popup__user-completed-text">
              {user2Complete ? "Completed" : "Incomplete"}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalPopup;

/*

number
task
locked
userOnePicture
userTwoPicture
userOneComplete
userTwoComplete

*/
