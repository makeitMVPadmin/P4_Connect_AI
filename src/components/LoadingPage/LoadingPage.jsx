import "./LoadingPage.scss";
import LoadingBar from "../LoadingBar/LoadingBar";
import CoffeeMugWithHat_happy from "../../assets/images/coffeeMugWithHat_happy.svg";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <h2 className="loading-page__text">
        Give us a couple of seconds, we are nearly there...
      </h2>
      <LoadingBar />
      <img
        src={CoffeeMugWithHat_happy}
        alt="communiti icon"
        className="loading-page__icon"
      />
    </div>
  );
};

export default LoadingPage;
