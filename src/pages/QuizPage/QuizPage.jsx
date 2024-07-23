import "./QuizPage.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import QA from "../../data";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import Textarea from "../../components/Textarea/Textarea";
import React from "react";
const QuizPage = () => {
  const Questions = QA.map((data) => data.question_content);
  const ans1 = QA[0].answers.map((item) => item.answer_content);
  const ans2 = QA[1].answers.map((item) => item.answer_content);
  const ans3 = QA[2].answers.map((item) => item.answer_content);
  const ans4 = QA[3].answers.map((item) => item.answer_content);
  const ans5 = QA[4].answers.map((item) => item.answer_content);
  const ans6 = QA[5].answers.map((item) => item.answer_content);
  const ans7 = QA[6].answers.map((item) => item.answer_content);
  const ans8 = QA[7].answers.map((item) => item.answer_content);
  const ans9 = QA[8].answers.map((item) => item.answer_content);
  const ans10 = QA[9].answers.map((item) => item.answer_content);
  const ans11 = QA[10].answers.map((item) => item.answer_content);

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

  return (
    <div className="quizpage">
      <div className="quizpage__container">
        <div className="quizpage__side-area"><ProgressBar /></div>
        <div className="quizpage__main">
          <form onSubmit={handleFormSubmit}>
            <section className="quizpage__main_section">
              <div className="quizpage__main_section--field">
                <Dropdown
                  labelName={Questions[0]}
                  dropDownInfo1={ans1}
                  onChangeDropdown={(value) =>
                    handleInputChange(Questions[0], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                {" "}
                <Dropdown
                  labelName={Questions[1]}
                  dropDownInfo1={ans2}
                  onChangeDropdown={(value) =>
                    handleInputChange(Questions[1], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <Dropdown
                  labelName={Questions[2]}
                  dropDownInfo1={ans3}
                  onChangeDropdown={(value) =>
                    handleInputChange(Questions[2], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <DropdownCheckbox
                  labelName={Questions[3]}
                  options1={ans4}
                  onChangeDropdownCheckbox={(value) =>
                    handleInputChange(Questions[3], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <DropdownCheckbox
                  labelName={Questions[4]}
                  options1={ans5}
                  onChangeDropdownCheckbox={(value) =>
                    handleInputChange(Questions[4], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <Dropdown
                  labelName={Questions[5]}
                  dropDownInfo1={ans6}
                  onChangeDropdown={(value) =>
                    handleInputChange(Questions[5], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <Dropdown
                  labelName={Questions[6]}
                  dropDownInfo1={ans7}
                  onChangeDropdown={(value) =>
                    handleInputChange(Questions[6], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <DropdownCheckbox
                  labelName={Questions[7]}
                  options1={ans8}
                  onChangeDropdownCheckbox={(value) =>
                    handleInputChange(Questions[7], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <Dropdown
                  labelName={Questions[8]}
                  dropDownInfo1={ans9}
                  onChangeDropdown={(value) =>
                    handleInputChange(Questions[8], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <DropdownCheckbox
                  labelName={Questions[9]}
                  options1={ans10}
                  onChangeDropdownCheckbox={(value) =>
                    handleInputChange(Questions[8], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <DropdownCheckbox
                  labelName={Questions[10]}
                  options1={ans11}
                  onChangeDropdownCheckbox={(value) =>
                    handleInputChange(Questions[10], value)
                  }
                />
              </div>
              <div className="quizpage__main_section--field">
                <Textarea
                  labelName={Questions[11]}
                  handleTextarea={(value) =>
                    handleInputChange(Questions[11], value)
                  }
                />
              </div>
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
