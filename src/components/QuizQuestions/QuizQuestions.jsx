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
        item.question_type == "checkbox"
          ? []
          : item.question_type == "dropdown"
          ? {}
          : "";
    });
    return initialFormData;
  });
  const requiredQuestionIds = ["001", "002", "004", "006", "008"];
  const [selectedAnswerIds, setSelectedAnswerIds] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = React.useState(new Set());

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    console.log("Selected Answer IDs:", selectedAnswerIds.sort());
    setCurrentPage("match"); //this line of code is temporary and is only used to demonstrate page flow, it doesn't have any proper logic attached
  };

  const handleInputChange = (question_type, question_content, value) => {
    //setFormData({ ...formData, [question_content]: value });

    const questionItem = QA.find(
      (data) => data.question_content === question_content
    );
    const allAns = questionItem.answers;

    let newSelectedAnswerIds = selectedAnswerIds;
    let newFormData = formData ;

    if (question_type == "checkbox") {
      const ansDetails = value.map((each) => {
        const found = allAns.filter((data) => data.answer_content == each);
        return {
          answer_id: found[0].answer_id,
          answer_content: found[0].answer_content,
        };
      });
   

      newSelectedAnswerIds = newSelectedAnswerIds.filter(
        (id) => !allAns.some((ans) => ans.answer_id === id)
      );
    
      newSelectedAnswerIds = [
        ...newSelectedAnswerIds,
        ansDetails.map((id) => id.answer_id),
      ];
    
      newFormData = { ...newFormData, [question_content]:ansDetails };
    } else if (question_type == "dropdown") {
      const ansDetails = allAns
        .filter((item) => {
          return item.answer_content === value;
        })
        .map((ans) => {
          return {
            answer_id: ans.answer_id,
            answer_content: ans.answer_content,
          };
        });

      console.log("answerDetails in dropdown", ansDetails);

      newSelectedAnswerIds = newSelectedAnswerIds.filter(
        (id) => !allAns.some((ans) => ans.answer_id === id)
      );

      newSelectedAnswerIds = [
        ...newSelectedAnswerIds,
        ansDetails.map((id) => id.answer_id)[0],
      ];
      console.log("newSelectedAnswerIds in dropdown", newSelectedAnswerIds);

    
      newFormData = { ...newFormData, [question_content]: ansDetails };
      console.log("newFormData in dropdown", newFormData);
    } 
    else {
      newSelectedAnswerIds = [...newSelectedAnswerIds, value];
    }

    setSelectedAnswerIds(newSelectedAnswerIds.flat());
    setFormData(newFormData);

    setAnsweredQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.add(question_content);
      return newSet;
    });
  };

  // const arequestionAnswered = () => {
  //   const k = Array.from(answeredQuestions).map((ans) => {
  //     const p = QA.find((data) => data.question_content === ans).question_id;
  //     return p;
  //   });

  //   const answeredQuestArray = requiredQuestionIds.map((id) => k.includes(id));
  //   const answeredQuest = answeredQuestArray.every((quest) => quest === true);
  //   //console.log("answeredQuest", answeredQuest);
  //   return answeredQuest;
  // };

  useEffect(() => {
    onProgressChange(answeredQuestions.size);
  }, [answeredQuestions, onProgressChange]);

  const renderedQuestions = (item, index) => {
    const answers = item.answers?.map((answer) => answer.answer_content);

    switch (item.question_type) {
      case "dropdown":
        return (
          <>
            <Dropdown
              labelName={item.question_content}
              dropDownInfo1={answers}
              question_id={item.question_id}
              onChangeDropdown={(value) =>
                handleInputChange(
                  item.question_type,
                  item.question_content,
                  value
                )
              }
            />
          </>
        );
      case "checkbox":
        return (
          <DropdownCheckbox
            labelName={item.question_content}
            options1={answers}
            question_id={item.question_id}
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
            <Button
              text="Next"
              color="blue"
              type="submit"
              // disabled={!arequestionAnswered()}
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default QuizQuestions;
