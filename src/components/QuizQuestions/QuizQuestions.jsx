import React, { useState, useEffect } from "react";
import QA from "../../data";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import Textarea from "../../components/Textarea/Textarea";
import "./QuizQuestions.scss";
// import { readData } from "../../utils/Functions/functions";

// import { findBestMatch } from "../../utils/Functions/matching";

// //This is only here to generate an ID for the matching algo; to be deleted
// function generateUID() {
//   // Generate a random 10-digit number
//   const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);

//   // Convert the number to a string and append it to "UID"
//   const uid = `UID${randomNumber}`;

//   return uid;
// }

const QuizQuestions = ({ setCurrentPage, onProgressChange }) => {
  //get the saved answers from session storage
  const getSessionData = () => {
    const savedData = sessionStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  };

  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    QA.forEach((item) => {
      initialFormData[item.question_content] =
        item.question_type == "checkbox" ? [] : "";
    });
    //get from session storage
    return { ...initialFormData, ...getSessionData() };
  });
  //all answers required except Q12
  const requiredQuestionIds = [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
    "011",
  ];
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    const formDataJson = sessionStorage.getItem("formData");
    if (formDataJson) {
      return JSON.parse(formDataJson);
    } else {
      QA.forEach((item) => {
        initialFormData[item.question_content] =
          item.question_type == "checkbox" ? [] : "";
      });
      return initialFormData;
    }
  });
  const [selectedAnswerIds, setSelectedAnswerIds] = useState(() => {
    const savedSelectedAnswerIds = sessionStorage.getItem(
      "selectedAnswerIdsJSON"
    );
    return savedSelectedAnswerIds ? JSON.parse(savedSelectedAnswerIds) : [];
  });

  const [answeredQuestions, setAnsweredQuestions] = useState(() => {
    const savedAnsweredQuestions = sessionStorage.getItem("answeredQuestions");
    return savedAnsweredQuestions
      ? new Set(JSON.parse(savedAnsweredQuestions))
      : new Set();
  });

  useEffect(() => {
    const formDataJSON = JSON.stringify(formData);
    sessionStorage.setItem("formData", formDataJSON);
  }, [formData]);

  //save answeredQuestions to session storage
  useEffect(() => {
    const answeredQuestionsArray = Array.from(answeredQuestions);
    sessionStorage.setItem(
      "answeredQuestions",
      JSON.stringify(answeredQuestionsArray)
    );
  }, [answeredQuestions]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const questionContent004 = QA.find(
      (q) => q.question_id === "004"
    ).question_content;
    const selectedOptions = formData[questionContent004];
    if (selectedOptions.length < 2) {
      alert(` ${questionContent004}`);
      return;
    }

    console.log("formData", formData);
    console.log("Selected Answer IDs:", selectedAnswerIds.sort());

    // //Generate an ID for the current user; to be deleted
    // const newUID = generateUID();

    // //send to matching function
    // const result = findBestMatch({ user_id: newUID, answers: selectedAnswerIds });
    // console.log(result);

    // setCurrentPage("match"); //old match page - this line of code is temporary and is only used to demonstrate page flow, it doesn't have any proper logic attached
    setCurrentPage("loading");
    setCurrentPage("loading");
  };

  const handleInputChange = (question_type, question_content, value) => {
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [question_content]: value };
      return updatedFormData;
    });

    const questionItem = QA.find(
      (data) => data.question_content === question_content
    );
    const allAns = questionItem.answers;
    let newSelectedAnswerIds = selectedAnswerIds;

    if (question_type === "checkbox") {
      const answerIds = value.map((each) => {
        const found = allAns.filter((data) => data.answer_content === each);
        return found[0]?.answer_id;
      });

      newSelectedAnswerIds = newSelectedAnswerIds.filter(
        (id) => !allAns.some((ans) => ans.answer_id === id)
      );
      newSelectedAnswerIds = [...newSelectedAnswerIds, ...answerIds];
    }

    if (question_type === "dropdown") {
      const answerIds = allAns
        .filter((item) => item.answer_content === value)
        .map((data) => data.answer_id);
      newSelectedAnswerIds = newSelectedAnswerIds.filter(
        (id) => !allAns.some((ans) => ans.answer_id === id)
      );
      newSelectedAnswerIds = [...newSelectedAnswerIds, ...answerIds];
    } else {
      newSelectedAnswerIds = newSelectedAnswerIds.filter((id) => id !== value);
    }

    setSelectedAnswerIds(newSelectedAnswerIds.flat());

    setAnsweredQuestions((prev) => {
      const newSet = new Set(prev);
      (value != "Please select an option" && question_type === "dropdown") ||
      (value.length > 0 && question_type == "checkbox")(
        value.length > 0 && question_type == "checkbox"
      )
        ? newSet.add(question_content)
        : newSet.delete(question_content);

      return newSet;
    });
  };

  const arequestionAnswered = () => {
    const k = Array.from(answeredQuestions).map((quest) => {
      const p = QA.find((data) => data.question_content === quest).question_id;
      return p;
    });

    const answeredQuestArray = requiredQuestionIds.map((id) => k.includes(id));
    const answeredQuest = answeredQuestArray.every((quest) => quest === true);
    return answeredQuest;
  };

  useEffect(() => {
    onProgressChange(answeredQuestions.size);
  }, [formData, answeredQuestions, onProgressChange]);

  const renderedQuestions = (item, index) => {
    const answers = item.answers?.map((answer) => answer.answer_content);

    //set value to formData value retrieved from session storage
    const currentValue = formData[item.question_content];

    switch (item.question_type) {
      case "dropdown":
        return (
          <>
            <Dropdown
              labelName={item.question_content}
              dropDownInfo1={answers}
              question_id={item.question_id}
              value={currentValue}
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
            values={currentValue}
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
            value={currentValue}
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
              color={arequestionAnswered() ? "blue" : "grey"}
              type="submit"
              disabled={!arequestionAnswered()}
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default QuizQuestions;
