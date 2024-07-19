import "./PillButton.scss";

const PillButton = ({ text, color, eventListener }) => {
  return (
    <button
      className={`pillbutton pillbutton--${color}`}
      onClick={eventListener}
    >
      <h3 className="button__text">{text}</h3>
    </button>
  );
};

export default PillButton;
