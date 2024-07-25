import React from "react";
import "./Textarea.scss";

const Textarea = ({ labelName, handleTextarea }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    handleTextarea(e.target.value);
  };
  return (
    <div className="textarea">
      <label className="textarea__question" htmlFor="input">
        {labelName}
      </label>
      <textarea
        className="textarea__input"
        name=""
        id="input"
        value={value}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
