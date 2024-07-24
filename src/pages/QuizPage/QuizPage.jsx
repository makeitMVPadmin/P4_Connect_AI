import "./QuizPage.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import QA from "../../data";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import Textarea from "../../components/Textarea/Textarea";
import React from "react";
const QuizPage = () => {
  // const [formData, setFormData] = React.useState(() => {
  //   const initialFormData = {};
  //   QA.forEach((item) => {
  //     initialFormData[item.question_content] =
  //       item.question_type == "checkbox" ? [] : "";
  //   });
  //   return initialFormData;
  // });
  const [formData, setFormData] = React.useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleInputChange = (value) => {
    let updatedValue = [];
    console.log("value", value);
    if (Array.isArray(value)) {
      updatedValue = value.flatMap((item) => {
        const answer_id = QA.map((data) =>
          data.answers
            ?.filter((answer) => answer.answer_content === item)
            .map((answer) => answer.answer_id)
        );
        return answer_id;
      });
    } else {
      updatedValue = QA.flatMap((item) =>
        item.answers
          ?.filter((answer) => answer.answer_content === value)
          .map((answer) => answer.answer_id)
      );
    }
    console.log("ppk", updatedValue);
    setFormData([...formData, updatedValue]);
  };

  const renderedQuestions = (item, index) => {
    const answers = item.answers?.map((answer) => answer.answer_content);

    switch (item.question_type) {
      case "dropdown":
        return (
          <Dropdown
            labelName={item.question_content}
            dropDownInfo1={answers}
            onChangeDropdown={(value) => handleInputChange(value)}
          />
        );
      case "checkbox":
        return (
          <DropdownCheckbox
            labelName={item.question_content}
            options1={answers}
            onChangeDropdownCheckbox={(value) => handleInputChange(value)}
          />
        );
      case "textarea":
        return (
          <Textarea
            labelName={item.question_content}
            handleTextarea={(value) => handleInputChange(value)}
          />
        );
      default:
    }
  };

  return (
    <div className="quizpage">
      <div className="quizpage__container">
        <div className="quizpage__side-area">
          <ProgressBar />
        </div>
        <div className="quizpage__main">
          <form onSubmit={handleFormSubmit}>
            <section className="quizpage__main_section">
              {QA.map((item, index) => (
                <div className="quizpage__main_section--field">
                  {renderedQuestions(item, index)}
                </div>
              ))}
              <div className="quizpage__main_section--field">
                <Button text="Next" color="blue" />
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
