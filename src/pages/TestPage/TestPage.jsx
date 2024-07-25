import "./TestPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import ListWithCheckbox from "../../components/ListWithCheckbox/ListWithCheckbox";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import PromptPage from "../PromptPage/PromptPage";

const TestPage = () => {
  return (
    <div>
      <Dropdown />
      <DropdownCheckbox />
      <ListWithCheckbox />
      <PromptPage />
    </div>
  );
};

export default TestPage;
