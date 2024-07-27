import React from "react";
import { useEffect } from "react";
import QA from "../../data";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import Textarea from "../../components/Textarea/Textarea";
import "./QuizQuestions.scss";
const QuizQuestions = ({ setCurrentPage, onProgressChange }) => {
  // const [formData, setFormData] = React.useState(() => {
  //   const initialFormData = {};
  //   QA.forEach((item) => {
  //     initialFormData[item.question_content] =
  //       item.question_type == "checkbox" ? [] : "";
  //   });
  //   return initialFormData;
  // });
  const [formData, setFormData] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [answeredQuestions, setAnsweredQuestions] = React.useState(new Set());

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (textAreaValue) {
      setFormData([...formData, textAreaValue]);
      setTextAreaValue("");
    }
    setCurrentPage("match"); //this line of code is temporary and is only used to demonstrate page flow, it doesn't have any proper logic attached
    if (!textAreaValue) {
      setCurrentPage("no-match"); //this is also temporary and logic needs to be implemented here for when there is no-match
    }
  };
  useEffect(() => {
    console.log("formData", formData);
  }, [formData, textAreaValue]);

  const handleInputChange = (question_type, question_content, value) => {
    let updatedValue = new Set(formData);
    const QuestionItem = QA.filter((data) => data.question_content === question_content);
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
    }

    setAnsweredQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.add(question_content);
      return newSet;
    });

    setFormData(Array.from(updatedValue)); // transform Set to Array for updating state
  };

  const handleTextareaChange = (value) => {
    setTextAreaValue(value);
  };

  useEffect(() => {
    onProgressChange(answeredQuestions.size);
  }, [answeredQuestions, onProgressChange]);

  const renderedQuestions = (item, index) => {
    const answers = item.answers?.map((answer) => answer.answer_content);

    switch (item.question_type) {
      case "dropdown":
        return (
          <Dropdown
            labelName={item.question_content}
            dropDownInfo1={answers}
            onChangeDropdown={(value) =>
              handleInputChange(item.question_type, item.question_content, value)
            }
          />
        );
      case "checkbox":
        return (
          <DropdownCheckbox
            labelName={item.question_content}
            options1={answers}
            onChangeDropdownCheckbox={(value) =>
              handleInputChange(item.question_type, item.question_content, value)
            }
          />
        );
      case "textarea":
        return (
          <Textarea
            labelName={item.question_content}
            handleTextarea={(value) => handleTextareaChange(value)}
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
            <Button text="Next" color="blue" type="submit" />
          </div>
        </section>
      </form>
    </div>
  );
};

export default QuizQuestions;
