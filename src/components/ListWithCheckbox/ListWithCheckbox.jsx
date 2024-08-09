import React, { useState, useEffect } from "react";
import "./ListWithCheckbox.scss";

const ListWithCheckbox = ({ options1, onChange, savedCheckedState }) => {
  const [selectedValues, setSelectedValues] = useState(savedCheckedState || {});

  useEffect(() => {
    setSelectedValues(savedCheckedState || {});
  }, [savedCheckedState]);

  const handleChange = (option) => {
    const newSelectedValues = {
      ...selectedValues,
      [option]: !selectedValues[option],
    };
    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues);
  };

  const isPreviousChecked = (index) => {
    if (index === 0) return true; // The first checkbox is always enabled
    return selectedValues[options1[index - 1]];
  };

  return (
    <div className="listwithcheckbox">
      <div className="listwithcheckbox_options">
        {options1.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedValues[option] || false}
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
