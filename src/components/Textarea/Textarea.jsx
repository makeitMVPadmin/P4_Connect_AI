import "./Textarea.scss";

const Textarea = () => {
  return (
    <div className="textarea">
      <label className="textarea__question" htmlFor="input">
        Is there anything else you would like us to consider when setting your
        goal?
      </label>
      <textarea className="textarea__input" name="" id="input"></textarea>
    </div>
  );
};

export default Textarea;