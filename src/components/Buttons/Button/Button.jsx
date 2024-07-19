import "./Button.scss";

const Button = ({ text, color, eventListener }) => {
  return (
    <button className={`button button--${color}`} onClick={eventListener}>
      <h3 className="button__text">{text}</h3>
    </button>
  );
};

export default Button;
