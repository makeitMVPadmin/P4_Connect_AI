import "./LoadingPage.scss";
import LoadingBar from "../LoadingBar/LoadingBar";
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
  }, []);

  return (
    <div className="loading-page">
      <h2 className="loading-page__text">
        Hold on, we’re looking for your perfect partner...
      </h2>
      <LoadingBar />
      <img
        src={connectAiIcon}
        alt="communiti icon"
        className="loading-page__icon"
      />
    </div>
  );
};

export default LoadingPage;
