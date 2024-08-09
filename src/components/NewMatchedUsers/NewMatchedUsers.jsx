import "./NewMatchedUsers.scss";
import Button from "../Button/Button.jsx";
import { useEffect, useState } from "react";
// temporary user2 picture as placeholders:
import user2 from "../../assets/images/user2.png";
import email from "../../assets/icons/mage_email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { readData } from "../../utils/Functions/functions.js";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";
//need to import function to retrieve matches from firebase:
//ex. import {getMatches} from "../../utils/firebaseMatches";

//need to define props on main single page: need "handleBackToQuiz" function, "handleGoToGoal" function and pass to MatchedUsers component
const NewMatchedUsers = ({
  handleBackToQuiz,
  handleGoToGoal,
  matchResults,
}) => {
  const [matchedUsername, setMatchedUsername] = useState("Kerry");
  const [matchedUserTitle, setMatchedUserTitle] = useState(
    "UX/UI Designer in training"
  );
  const [user2Pic, setUser2Pic] = useState(user2); //replace user2 with null instead of image placeholder
  const [matchPercentage, setMatchPercentage] = useState(88); //replace 88 with null instead of int placeholder

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section className="new-matched-users">
      <div className="new-matched">
        <h2 className="new-matched__title">Congratulations!</h2>
        <h2 className="new-matched__title">
          {`
          You have a ${matchPercentage}% match with ${matchedUsername}!`}
        </h2>
        <div className="new-matched__user-info">
          <img
            src={user2Pic}
            alt="user2 avatar "
            className="new-matched__user"
          />
          <div className="new-matched__user-area">
            <div className="new-matched__user-title">
              <h3 className="new-matched__user-title-text">{`${matchedUsername}`}</h3>
              <p className="new-matched__text">{`${matchedUserTitle}`}</p>
            </div>
            <div className="new-matched__user-social">
              <img
                src={email}
                alt="email icon"
                className="
                new-matched__user-social-icon
                new-matched__user-social-icon--left"
                onClick={() =>
                  openInNewTab("https://mail.google.com/mail/u/0/#inbox")
                }
              />
              <img
                src={linkedin}
                alt="linkedin icon"
                className="new-matched__user-social-icon"
                onClick={() => openInNewTab("https://www.linkedin.com/")}
              />
            </div>
          </div>
        </div>

        <p className="new-matched__text">
          Ready to start collaborating? Connect with your partner now and begin
          working towards your shared goals.
        </p>
        <div className="new-matched__button-div">
          <Button
            text="Retake the Quiz"
            color="white"
            className="new-matched__button--left"
            eventListener={handleBackToQuiz}
          />

          <Button
            text="Set Goal"
            color="blue"
            className="new-matched__button--right"
            eventListener={handleGoToGoal}
          />
        </div>
      </div>
    </section>
  );
};
export default NewMatchedUsers;
