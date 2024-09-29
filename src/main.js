import { Link } from "react-router-dom";
import CoffeeMugWithHat_happy from "./assets/images/coffeeMugWithHat_happy.svg";

import "./styles/partials/_global.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home">
        <div className="home__container">
          <>
            <div className="home__top-bar" />
            <div className="home__middle-container">
              <div className="home__middle-container__sub-container">
                <div className="home__middle-container__coffeemug-container">
                  <img
                    className="home__middle-container__coffeemug-img"
                    alt=""
                    src={CoffeeMugWithHat_happy}
                  />
                </div>
                <div className="home__middle-container__sub-container text-container">
                  <div className="welcome-message">
                    Welcome to AccountaBuddy!
                  </div>
                </div>
                <div className="button-container">
                  
                  <Link to="/prompt">
                    <button className={"button button--blue"} type="button">
                      Click to go to AccountaBuddy
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home__bottom-bar" />
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
