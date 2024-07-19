import React, { useState } from "react";
import "./ListWithCheckbox.scss";
const ListWithCheckbox = ({ options, label, onFunctionChange }) => {
  const options1 = [
    "Scheduled & attend one Accountability Meeting",
    "Attend 2 accountability meeting",
    "Attend 3 accountability meeting",
    "Attend all Accountability meeting",
  ];
  const [selectedValues, setselectedValues] = useState(
    options1.reduce((arr, option) => {
      arr[option] = false;
      return arr;
    }, {})
  );

  const handleChange = (option) => {
    setselectedValues({ ...selectedValues, [option]: !selectedValues[option] });
  };
  return (
    <div className="listwithcheckbox">
      <h2>ListWithCheckbox{label}</h2>
      <div className="listwithcheckbox_options">
        {options1.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedValues[option]}
              onChange={() => handleChange(option)}
              className={
                selectedValues[option] ? "option_active" : "option_inactive"
              }
            />
            <span
              className={
                selectedValues[option] ? "option_active" : "option_inactive"
              }
            >
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ListWithCheckbox;
