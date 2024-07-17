import React from "react";
import "./Dropdown.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Dropdown = ({ dropDownInfo1, labelName }) => {
  const dropDownInfo = [
    "Design",
    "Engineering",
    "Finance",
    "Marketing",
    "HR",
    "Sales",
  ];
  const [updatedValue, setUpdatedValue] = React.useState();
  const [dummyValue, setDummyValue] = React.useState("Please select an option");
  const [isActive, setIsActive] = React.useState(false);

  const handleupdatedvalue = (event) => {
    setUpdatedValue(event.target.innerHTML);

    setIsActive(!isActive);
  };
  const handledummyvalue = () => {
    setUpdatedValue("");
    setDummyValue("Please select an option");
    setIsActive(!isActive);
  };
  const handledropdownclick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor="labelName">
        What areas would you Like to improve {labelName}
      </label>
      <section className="dropdown_wrapper">
        <article className="dropdown_wrapper_select">
          <div className="dropdown_wrapper_select_trigger">
            <span>{updatedValue ? updatedValue : dummyValue}</span>
            <span>
              <ArrowDropDownIcon
                onClick={handledropdownclick}
                className={`arrow ${
                  isActive ? "arrow-up-icon" : "arrow-down-icon"
                }`}
              />
            </span>
          </div>
          {isActive && (
            <div className="dropdown_wrapper_select_option">
              <span
                className="custom-option"
                data-value="Please Select an Option"
                onClick={handledummyvalue}
              >
                Please select an option
              </span>
              {dropDownInfo
                .filter((item) => item !== updatedValue)
                .map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="custom-option"
                      data-value={item}
                      onClick={handleupdatedvalue}
                    >
                      {item}
                    </span>
                  );
                })}
            </div>
          )}
        </article>
      </section>
    </div>
  );
};

export default Dropdown;
