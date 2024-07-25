import "./PromptPage.scss";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Button from "../../components/Button/Button";
import CoffeeMugWithHat_happy from "../../assets/images/coffeeMugWithHat_happy.svg";
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
            <div className="promptpage__middle-container__sub-container">
              <div className="promptpage__middle-container__coffeemug-container">
                <img
                  className="promptpage__middle-container__coffeemug-img"
                  alt=""
                  src={CoffeeMugWithHat_happy}
                />
              </div>
              <div className="promptpage__middle-container__sub-container text-container">
                <div className="welcome-message">Welcome to ConnectAI</div>
                <div className="welcome-text">
                  Our AI feature empowers you to achieve your professional goals
                  through personalized accountability partnerships. By taking
                  our quick matching quiz, you’ll be paired with a peer who
                  complements your skills, and you both will work towards a
                  common goal.
                </div>
                <div className="welcome-text">
                  Click "Next" to get started on your journey to effective
                  peer-to-peer accountability.
                </div>
              </div>
              <div className="button-container">
                <Button text="Back" color="white" className="back" />
                <Button text="Next" color="dark-blue" className="next" />
              </div>
            </div>
          </div>
          <div className="promptpage__bottom-bar" />
        </div>
      </div>
    </div>
  );
};

export default PromptPage;
