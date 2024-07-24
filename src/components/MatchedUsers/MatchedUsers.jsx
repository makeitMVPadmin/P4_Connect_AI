import "./MatchedUsers.scss";
import Button from "../Button/Button.jsx";
import { useEffect, useState } from "react";
// temporary user1 and user2 pictures as placeholders:
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
//need to import function to retrieve matches from firebase:
//ex. import {getMatches} from "../../utils/firebaseMatches";

//need to define props on main single page: need "handleBackToQuiz" function, "handleGoToGoal" function and pass to MatchedUsers component
const MatchedUsers = ({ handleBackToQuiz, handleGoToGoal }) => {
  const [user1Pic, setUser1Pic] = useState(user1); //replace user1 with null instead of image placeholder
  const [user2Pic, setUser2Pic] = useState(user2); //replace user2 with null instead of image placeholder
  const [matchPercentage, setMatchPercentage] = useState(88); //replace 88 with null instead of int placeholder

  //grab matches.user_id1_pic and matches.user_id2_pic, and matches.match_percentage from backend:
  //for example - simulating a fetch from backend:
  //   useEffect(()=>{
  // async function fetchMatches (){
  //   const matches = await getMatches();
  //setUser1Pic(matches.user_id1_pic);
  //setUser2Pic(matches.user_id2_pic);
  //setMatchPercentage(matches.match_percentage)
  // }
  //   fetchMatches()}, [])

  return (
    <div className="matched">
      <h2 className="matched__title">
        {`Congratulations! You have a ${matchPercentage}% match!`}
      </h2>
      <div className="matched__images">
        <img src={user1Pic} alt="user1 avatar " className="matched__user" />
        <img src={user2Pic} alt="user2 avatar " className="matched__user" />
      </div>

      <p className="matched__text">
        Ready to start collaborating? Connect with your partner now and begin working
        towards your shared goals.
      </p>
      <div className="matched__button-div">
        <Button
          text="Retake the Quiz"
          color="white"
          className="matched__button--left"
          eventListener={handleBackToQuiz}
        />

        <Button
          text="Set Goal"
          color="blue"
          className="matched__button--right"
          eventListener={handleGoToGoal}
        />
      </div>
    </div>
  );
};
export default MatchedUsers;
