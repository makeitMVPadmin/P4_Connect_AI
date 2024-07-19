import React, { useState } from "react";

const ListWithCheckbox = ({ options, label, onFunctionChange }) => {
  const options1 = ["option1", "option2", "option3"];
  const [checked, setChecked] = useState(
    options1.reduce((arr, option) => {
      arr[option] = false;

      return arr;
    }, {})
  );
  console.log(checked);

  return (
    <div className="listwithcheckbox">
      <h2>{label}</h2>
      <div className="listwithcheckbox_options">
        {options1.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={checked[option]}
              onChange={() => {
                setChecked({ ...checked, [option]: !checked[option] });
              }}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ListWithCheckbox;
