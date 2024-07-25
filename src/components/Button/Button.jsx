import "./Button.scss";

const Button = ({ text, color, eventListener, className }) => {
  console.log(eventListener);
  return (
    <button
      className={` button button--${color} ${className}`}
      onClick={eventListener}
    >
      <h3 className="button__text">{text}</h3>
    </button>
  );
};

export default Button;
