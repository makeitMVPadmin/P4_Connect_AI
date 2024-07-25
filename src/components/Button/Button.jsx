import "./Button.scss";

const Button = ({
  text,
  color,
  eventListener,
  className = "",
  type = "button",
}) => {
  return (
    <button
      className={`button button--${color} ${className}`}
      onClick={eventListener}
      type={type}
    >
      <h3 className="button__text">{text}</h3>
    </button>
  );
};

export default Button;
