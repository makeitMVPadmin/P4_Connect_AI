import React, { useState } from "react";
import { useEffect } from "react";
import QA from "../../data";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import Textarea from "../../components/Textarea/Textarea";
import "./QuizQuestions.scss";
const QuizQuestions = ({ setCurrentPage, onProgressChange }) => {
  const [formData, setFormData] = React.useState(() => {
    const initialFormData = {};
    QA.forEach((item) => {
      initialFormData[item.question_content] =
        item.question_type == "checkbox" ? [] : "";
    });
    return initialFormData;
  });
  // const [formData, setFormData] = React.useState([]);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = React.useState(new Set());

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    console.log("Selected Answer IDs:", selectedAnswerIds);
    setCurrentPage("match"); //this line of code is temporary and is only used to demonstrate page flow, it doesn't have any proper logic attached
  };

  const handleInputChange = (
    question_type,
    question_id,
    question_content,
    value
  ) => {
    setFormData({ ...formData, [question_content]: value });

    const questionItem = QA.find(
      (data) => data.question_content === question_content
    );
    const allAns = questionItem.answers;
    let newSelectedAnswerIds = [...selectedAnswerIds];

    if (question_type == "checkbox") {
      const answerIds = value.map((each) => {
        const found = allAns.filter((data) => data.answer_content == each);
        return found[0]?.answer_id;
      });
      console.log("answerIds in checkbox", answerIds);

      newSelectedAnswerIds = newSelectedAnswerIds
        .filter((id) => !id.startsWith(question_id))
        .flat();

      console.log("newSelectedAnswerIds in checkbox", newSelectedAnswerIds);
      newSelectedAnswerIds = [...newSelectedAnswerIds.flat(), answerIds];
    } 
    
    
    
    
    else if (question_type == "dropdown") {
      const answerIds = allAns
        .filter((item) => item.answer_content === value)
        .map((data) => data.answer_id);
      console.log("answerIds in dropdown", answerIds);

      newSelectedAnswerIds = newSelectedAnswerIds
        .filter((id) => !id.startsWith(question_id))
        .flat();

      newSelectedAnswerIds = [...newSelectedAnswerIds.flat(), answerIds];
    }
    
    
    
    else {
      newSelectedAnswerIds = [...newSelectedAnswerIds, value];
    }
    setSelectedAnswerIds(newSelectedAnswerIds);
    setAnsweredQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.add(question_content);
      return newSet;
    });
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
                item.question_id,
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
                item.question_id,
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
            <Button text="Next" color="blue" type="submit" />
          </div>
        </section>
      </form>
    </div>
  );
};

export default QuizQuestions;
