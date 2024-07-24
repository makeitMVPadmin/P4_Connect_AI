import React from "react";
import QA from "../../data";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import Textarea from "../../components/Textarea/Textarea";
import "./QuizQuestions.scss";
const QuizQuestions = () => {
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


  const handleInputChange = (question_type, question_content, value) => {
    let updatedValue = new Set(formData);
    const QuestionItem = QA.filter(
      (data) => data.question_content === question_content
    );
    const allAns = QuestionItem.flatMap((item) => item.answers);

    if (question_type === "checkbox") {
      value.flatMap((eachAns) => {
        const ansIds = allAns
          .filter((answer) => answer.answer_content === eachAns)
          .map((answer) => answer.answer_id);
        ansIds.forEach((id) => updatedValue.add(id));
      });
    } else if (question_type === "dropdown") {
      const ansIds = allAns
        .filter((answer) => answer.answer_content === value)
        .map((answer) => answer.answer_id);
      ansIds.forEach((id) => updatedValue.add(id));
    } else {
      updatedValue.add(value);
    }
    setFormData(updatedValue);
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
              handleInputChange(
                item.question_type,
                item.question_content,
                value
              )
            }
          />
        );
      case "checkbox":
        return (
          <DropdownCheckbox
            labelName={item.question_content}
            options1={answers}
            onChangeDropdownCheckbox={(value) =>
              handleInputChange(
                item.question_type,
                item.question_content,
                value
              )
            }
          />
        );
      case "textarea":
        return (
          <Textarea
            labelName={item.question_content}
            handleTextarea={(value) =>
              handleInputChange(
                item.question_type,
                item.question_content,
                value
              )
            }
          />
        );
      default:
    }
  };
  return (
    <div className="quizquestions">
      <form onSubmit={handleFormSubmit}>
        <section className="quizquestions_section">
          {QA.map((item, index) => (
            <div className="quizquestions_section--field">
              {renderedQuestions(item, index)}
            </div>
          ))}
          <div className="quizquestions_section--field">
            <Button text="Next" color="blue" />
          </div>
        </section>
      </form>
    </div>
  );
};

export default QuizQuestions;
