import React, { useState } from "react";
import "./ListWithCheckbox.scss";
const ListWithCheckbox = ({ options, label, onFunctionChange }) => {
  const options1 = [
    "Scheduled & attend one Accountability Meeting",
    "Attend 2 accountability meeting",
    "Attend 3 accountability meeting",
    "Attend all Accountability meeting",
  ];
  const [selectedValues, setSelectedValues] = useState(
    options1.reduce((arr, option) => {
      arr[option] = false;
      return arr;
    }, {})
  );

  const handleChange = (option) => {
    setSelectedValues({ ...selectedValues, [option]: !selectedValues[option] });
  };
  const isPreviousChecked = (index) => {
    if (index === 0) return true; // The first checkbox is always enabled
    return selectedValues[options1[index - 1]];
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
              disabled={!isPreviousChecked(index)}
              className="listwithcheckbox_options--checkboxescustom"
            />
            <span
              className={
                isPreviousChecked(index) ? "option_active" : "option_inactive"
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
