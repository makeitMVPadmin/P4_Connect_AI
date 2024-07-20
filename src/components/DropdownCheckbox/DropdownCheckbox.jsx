import React, { useState } from "react";
import "./DropdownCheckbox.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropdownCheckbox = ({ title, labelName, options1 }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  //const [isActive, setIsActive] = useState(false);

  const options = [
    { value: "programming", label: "Programming Languages )" },
    { value: "webdev", label: "Web Development (HTML/CSS, Frontend Frameworks)" },
    { value: "mobiledev", label: "Mobile App Development (iOS/Android)" },
    { value: "dataanalysis", label: "Data Analysis and Visualization" },
    { value: "mlai", label: "Machine Learning and AI" },
  ];

  // const handleDropdownClick = () => {
  //   setIsActive(!isActive);
  // };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedValues((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((v) => v !== value)
        : [...prevValues, value]
    );
  };


  return (
    <div className="dropdown-checkbox">
      {/* <div className="dropdown-checkbox__title" onClick={handleDropdownClick}>
      Technical Skills {title}
        <ArrowDropDownIcon
          className={`dropdown-checkbox__arrow ${
            isActive ? "arrow-up-icon" : "arrow-down-icon"
          }`}
        />
      </div> */}
    
        <div className="dropdown-checkbox__block">
          <div className="dropdown-checkbox__details">
            <label className="dropdown-checkbox__label">
            Identify the skills or areas you feel you need to develop further. {labelName}
            </label>
            <div className="dropdown-checkbox__group">
              {options.map((option, index) => (
                <label key={index} className="dropdown-checkbox__item">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedValues.includes(option.value)}
                    onChange={handleCheckboxChange}
                  />
                   <span className="checkbox-custom"></span>
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default DropdownCheckbox;





