import "./PromptPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import QuizPage from "../QuizPage/QuizPage";
import ListWithCheckbox from "../../components/ListWithCheckbox/ListWithCheckbox";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
const PromptPage = () => {
  return (
    <div className="promptpage-container">
      <div className="promptpage">
        {/* I am a prompt page */}
        <DashboardNavbar/>
        {/* <Dropdown />
        <DropdownCheckbox />
        <ListWithCheckbox />
        <QuizPage /> */}
      </div>
    </div>
  );
};

export default PromptPage;
