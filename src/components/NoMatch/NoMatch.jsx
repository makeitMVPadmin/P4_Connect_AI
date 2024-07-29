import "./NoMatch.scss";
import Button from "../Button/Button.jsx";
import { useEffect, useState } from "react";
// temporary user1 placeholder:
import user1 from "../../assets/images/user1.png";

//need to define props on main single page: need "handleBackToQuiz" function and pass to NoMatch component
const NoMatch = ({ handleBackToQuiz }) => {
  const [user1Pic, setUser1Pic] = useState(user1); //replace user1 with null instead of image placeholder

  return (
    <section className="no-matches">
      <div className="no-match">
        <h2 className="no-match__title">Unfortunately, there is no match yet...</h2>
        <div className="no-match__images">
          <img src={user1Pic} alt="user1 avatar " className="no-match__user" />
        </div>

        <p className="no-match__text">Want to check in later or retake the quiz?</p>
        <div className="no-match__button-div">
          <Button
            text="Retake the Quiz"
            color="white"
            className="no-match__button--left"
            eventListener={handleBackToQuiz}
          />
        </div>
      </div>
    </section>
  );
};
export default NoMatch;
