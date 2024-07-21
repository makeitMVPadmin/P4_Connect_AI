import "./PromptPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import QuizPage from "../QuizPage/QuizPage";
import ListWithCheckbox from "../../components/ListWithCheckbox/ListWithCheckbox";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";

const PromptPage = () => {
  return (
    // <div className="promptpage-container">
    //   <div className="promptpage">
    //     {/* <Dropdown />
    //     <DropdownCheckbox />
    //     <ListWithCheckbox />
    //     <QuizPage /> */}
    //   </div>
    // </div>
    <div className="promptpage">
      <div className="promptpage__container">
        <div className="promptpage__top-bar" />
        <div className="promptpage__middle-container">
          Place some Content here...
        </div>
        <div className="promptpage__bottom-bar" />
      </div>
    </div>
  );
};

export default PromptPage;
