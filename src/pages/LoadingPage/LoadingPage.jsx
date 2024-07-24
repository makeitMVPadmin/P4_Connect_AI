import "./LoadingPage.scss";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";

const LoadingPage = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="loading-page">
        <div className="loading-page__container">
          <LoadingBar />
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
