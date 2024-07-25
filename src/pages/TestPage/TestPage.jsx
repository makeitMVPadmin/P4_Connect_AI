import "./TestPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import QuizPage from "../QuizPage/QuizPage";
import ListWithCheckbox from "../../components/ListWithCheckbox/ListWithCheckbox";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import PromptPage from "../PromptPage/PromptPage";
import MatchedUsers from "../../components/MatchedUsers/MatchedUsers";

const TestPage = () => {
  return (
    <div>
      <Dropdown />
      <DropdownCheckbox />
      <ListWithCheckbox />
      <QuizPage />
      <PromptPage />
      <MatchedUsers/>
    </div>
  );
};

export default TestPage;
