import "./Button.scss";

const Button = ({ text, color, eventListener }) => {
  return (
    <div className={`button button--${color}`}>
      <h3 className="button__text">{text}</h3>
    </div>
  );
};

export default Button;
