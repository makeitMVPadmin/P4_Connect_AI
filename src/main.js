import { Link } from "react-router-dom";

import "./styles/partials/_global.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title"> Welcome to Acooutabuddy!</h1>
      <Link to="/prompt">Click to go to Acooutabuddy</Link>
    </div>
  );
};

export default Home;
