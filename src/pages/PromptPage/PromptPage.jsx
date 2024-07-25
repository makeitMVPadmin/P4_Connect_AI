import "./PromptPage.scss";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

const PromptPage = () => {
  return (
    <div>
      <div className="promptpage__navbar">
        <DashboardNavbar />
      </div>
      <div className="promptpage">
        <div className="promptpage__container">
          <div className="promptpage__top-bar" />
          <div className="promptpage__middle-container">
            Place some Content here...
            <LoadingPage />
          </div>
          <div className="promptpage__bottom-bar" />
        </div>
      </div>
    </div>
  );
};

export default PromptPage;
