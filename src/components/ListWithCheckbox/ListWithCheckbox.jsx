import React, { useState, useEffect } from "react";
import "./ListWithCheckbox.scss";

const ListWithCheckbox = ({
  options1,
  onChange,
  savedCheckedState,
  goaldivClassName,
}) => {
  const [selectedValues, setSelectedValues] = useState(() => {
    if (Object.keys(savedCheckedState).length) {
      return savedCheckedState;
    } else {
      const newObj = options1.reduce((acc, curr) => {
        acc[curr] = false;
        return acc;
      }, {});

      return newObj;
    }
  });

  const handleChange = (option) => {
    const p = Object.entries(selectedValues).filter(
      ([key, value]) => key === option
    );
  
    if (!p[0][1]) {
      const newSelectedValues = {
        ...selectedValues,
        [option]: !selectedValues[option],
      };
      onChange(newSelectedValues);
      return setSelectedValues(newSelectedValues);
    } 
  };

  const isPreviousChecked = (option) => {
    const currentIndex = options1.indexOf(option);
    if (currentIndex === 0) return true; // The first checkbox is always enabled

    // Check if the previous option in the list is checked
    const previousOption = options1[currentIndex - 1];
    return selectedValues[previousOption];
  };

  return (
    <div className={`listwithcheckbox ${goaldivClassName || ""}`}>
      <div className="listwithcheckbox_options">
        {options1.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedValues[option]}
              onChange={() => handleChange(option)}
              disabled={!isPreviousChecked(option)}
              className="listwithcheckbox_options--checkboxesgoals" 
            />
            <span
              className={
                isPreviousChecked(option)
                  ? `option_active`
                  : `option_inactive`
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
