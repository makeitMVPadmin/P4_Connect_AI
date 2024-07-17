import React from "react";
import "./Dropdown.scss"
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
  const handleChange = (event) => {
    setUpdatedValue(event.target.value);
    
  };
  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor="labelName">
        Hi{labelName}
      </label>
      <select
        className="dropdown__input"
        onChange={handleChange}
        value={updatedValue}
        required
      >
        <option value="" >
          Please select an option
        </option>
        {dropDownInfo.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
