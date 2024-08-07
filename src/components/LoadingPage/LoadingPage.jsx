import "./LoadingPage.scss";
import LoadingBar from "../LoadingBar/LoadingBar";
import connectAiIcon from "../../assets/images/connectAiIcon.svg";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <h2 className="loading-page__text">
        Give us a couple of seconds, we are nearly there...
      </h2>
      <LoadingBar />
      <img
        src={connectAiIcon}
        alt="communiti icon"
        className="loading-page__icon"
      />
    </div>
  );
};

export default LoadingPage;
