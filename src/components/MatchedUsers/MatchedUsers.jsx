import "./MatchedUsers.scss";
import Button from "../Button/Button.jsx";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";

const MatchedUsers = () => {
  return (
    <div className="matched">
      <h2 className="matched__title">Congratulations! You have an 88% match!</h2>
      <div className="matched__images">
        {/* need to insert logic to retrieve and display user1's profile picture */}
        <img src={user1} alt="user1 avatar " className="matched__user" />
        {/* need to insert logic to retrieve and display user2's profile picture */}
        <img src={user2} alt="user2 avatar " className="matched__user" />
      </div>

      <p className="matched__text">
        Ready to start collaborating? Connect with your partner now and begin working
        towards your shared goals.
      </p>
      <div className="matched__button-div">
        {/* need to insert logic for handling onClick */}
        <Button text="Retake the Quiz" color="white" className="matched__button--left" />
        {/* need to insert logic for handling onClick */}
        <Button text="Set Goal" color="blue" className="matched__button--right" />
      </div>
    </div>
  );
};
export default MatchedUsers;
