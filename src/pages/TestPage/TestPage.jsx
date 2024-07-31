import "./TestPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import ListWithCheckbox from "../../components/ListWithCheckbox/ListWithCheckbox";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import PromptPage from "../PromptPage/PromptPage";
import NoMatch from "../../components/NoMatch/NoMatch";

const TestPage = () => {
  return (
    <div>
      <Dropdown />
      <DropdownCheckbox />
      {/* <ListWithCheckbox /> */}
      <PromptPage />
      <NoMatch />
    </div>
  );
};

export default TestPage;
