import { Link } from "react-router-dom";

import "./styles/partials/_global.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title"> Welcome to Connect AI!</h1>
      <Link to="/prompt">Click to go to Connect AI</Link>
    </div>
  );
};

export default Home;
