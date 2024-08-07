import React, { useEffect } from "react";
import "./Dropdown.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Dropdown = ({
  dropDownInfo1,
  labelName,
  onChangeDropdown,
  value,
  question_id,
}) => {
  const [updatedValue, setUpdatedValue] = React.useState(value);
  const [dummyValue, setDummyValue] = React.useState("Please select an option");
  const [isActive, setIsActive] = React.useState(false);

  //add updatedValue if Session Storage has it
  useEffect(() => {
    setUpdatedValue(value);
  }, [value]);

  const handleupdatedvalue = (event) => {
    setUpdatedValue(event.target.innerHTML);
    setDummyValue("");
    onChangeDropdown(event.target.innerHTML);
    setIsActive(!isActive);
  };
  const handledummyvalue = () => {
    setUpdatedValue("");
    setDummyValue("Please select an option");
    onChangeDropdown("Please select an option");
    setIsActive(!isActive);
  };
  const handledropdownclick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor="labelName">
        {labelName}
      </label>
      <section className="dropdown_wrapper">
        <article className="dropdown_wrapper_select">
          <div
            className="dropdown_wrapper_select_trigger"
            onClick={handledropdownclick}
          >
            <span>{updatedValue ? updatedValue : dummyValue}</span>
            <span>
              <ArrowDropDownIcon
                className={`arrow ${
                  isActive ? "arrow-up-icon" : "arrow-down-icon"
                }`}
              />
            </span>
          </div>
          {isActive && (
            <div className="dropdown_wrapper_select_option">
              {updatedValue === "Please select an option" ? (
                ""
              ) : !dummyValue ? (
                <span
                  className="custom-option"
                  data-value="Please Select an Option"
                  onClick={handledummyvalue}
                >
                  Please select an option
                </span>
              ) : (
                ""
              )}

              {dropDownInfo1
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
