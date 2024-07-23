import "./QuizPage.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import QA from "../../data";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import Textarea from "../../components/Textarea/Textarea";
import React from "react";
const QuizPage = () => {
  const [formData, setFormData] = React.useState(() => {
    const initialFormData = {};
    QA.forEach((question) => {
      initialFormData[question.question_content] =
        question.question_type == "checkbox" ? [] : "";
    });
    return initialFormData;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleInputChange = (question, value) => {
    setFormData({ ...formData, [question]: value });
  };

  const renderedQuestions = (item, index) => {
    const answers = item.answers?.map((answer) => answer.answer_content);
    switch (item.question_type) {
      case "dropdown":
        return (
          <Dropdown
            labelName={item.question_content}
            dropDownInfo1={answers}
            onChangeDropdown={(value) =>
              handleInputChange(item.question_content, value)
            }
          />
        );
      case "checkbox":
        return (
          <DropdownCheckbox
            labelName={item.question_content}
            options1={answers}
            onChangeDropdownCheckbox={(value) =>
              handleInputChange(item.question_content, value)
            }
          />
        );
      case "textarea":
        return (
          <Textarea
            labelName={item.question_content}
            handleTextarea={(value) =>
              handleInputChange(item.question_content, value)
            }
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
