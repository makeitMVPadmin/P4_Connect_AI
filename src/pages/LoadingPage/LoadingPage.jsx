import "./LoadingPage.scss";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import CoffeeMugWithHat_happy from "../../assets/images/coffeeMugWithHat_happy.svg";
import connectAiIcon from "../../assets/images/connectAiIcon.svg";
import { useEffect, useState } from "react";

const LoadingPage = ({ currentPage, setCurrentPage }) => {
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    if (page === "loading") {
      setTimeout(() => {
        setCurrentPage("new-match");
      }, 2000);
      setPage(currentPage);
    }
    if (page === "loading1") {
      setTimeout(() => {
        setCurrentPage("roadmap");
      }, 2000);
      setPage(currentPage);
    }
  }, []);

  return (
    <div className="loading-page">
      <h2 className="loading-page__text">
        Give us a couple of seconds, we are nearly there...
      </h2>
      <LoadingBar />
      <img
        src={CoffeeMugWithHat_happy}
        alt="communiti icon"
        className="loading-page__icon"
      />
    </div>
  );
};

export default LoadingPage;
