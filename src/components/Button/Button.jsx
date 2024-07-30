import "./Button.scss";

const Button = ({
  text,
  color,
  eventListener,
  className = "",
  type = "button",
  disabled,
  children
}) => {
  return (
    <button
      className={`button button--${color} ${className}`}
      onClick={eventListener}
      type={type} disabled={disabled}
    >
      <h3 className="button__text">{text}</h3>
      {children}
    </button>
  );
};

export default Button;
