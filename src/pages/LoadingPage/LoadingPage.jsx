import "./LoadingPage.scss";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import connectAiIcon from "../../assets/images/connectAiIcon.svg";

const LoadingPage = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="loading-page">
        <div className="loading-page__container">
          <LoadingBar />
          <img
            src={connectAiIcon}
            alt="communiti icon"
            className="loading-page__icon"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
