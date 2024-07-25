import "./Button.scss";

const Button = ({ text, color, eventListener, className }) => {

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
