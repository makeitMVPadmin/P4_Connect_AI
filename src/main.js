import { Link } from "react-router-dom";

import "./styles/partials/_global.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title"> Welcome to AccountaBuddy!</h1>
      <Link to="/prompt">Click to go to AccountaBuddy</Link>
    </div>
  );
};

export default Home;
