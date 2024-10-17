import "./Button.scss";

const Button = ({
  text,
  color,
  eventListener,
  className = "",
  type = "button",
  disabled,
  border,
  children,
}) => {
  return (
    <button
      className={`button button--${color} ${className}`}
      onClick={eventListener}
      type={type}
      disabled={disabled}
      style={{ border: border }}
    >
      <h3 className="button__text">{text}</h3>
      {children}
    </button>
  );
};

export default Button;
