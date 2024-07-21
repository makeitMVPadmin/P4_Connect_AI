import "./PromptPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import QuizPage from "../QuizPage/QuizPage";
import ListWithCheckbox from "../../components/ListWithCheckbox/ListWithCheckbox";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";

const PromptPage = () => {
  return (

    <div>
      <div className="promptpage__navbar">
        <DashboardNavbar />
      </div>
      <div className="promptpage-container">
        <div className="promptpage">
          I am a prompt page 
         <Dropdown />
        <DropdownCheckbox />
        <ListWithCheckbox />
        <QuizPage />
        </div>
      </div>
    </div>
  );
};

export default PromptPage;
