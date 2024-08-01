import { useState, useEffect } from "react";
import "./Textarea.scss";

const Textarea = ({ labelName, handleTextarea, value }) => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  const handleChange = (e) => {
    setTextValue(e.target.value);
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
        value={textValue}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
