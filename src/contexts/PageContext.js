import { createContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState("prompt");
  const [progressBarIndex, setProgressBarIndex] = useState(0);

  const handleNext = (maxPages) => {
    if (progressBarIndex < maxPages) {
      setProgressBarIndex((prevIndex) => prevIndex + 1);
    }

    if (currentPage === "prompt") {
      setCurrentPage("onboarding1");
      setProgressBarIndex(1);
    } else if (currentPage === "onboarding1") {
      setCurrentPage("onboarding2");
      setProgressBarIndex(2);
    } else if (currentPage === "onboarding2") {
      setCurrentPage("onboarding3");
      setProgressBarIndex(3);
    }
  };

  const handleBack = () => {
    if (progressBarIndex > 0) {
      setProgressBarIndex((prevIndex) => prevIndex - 1);
    }

    if (currentPage === "onboarding1") {
      setCurrentPage("prompt");
      setProgressBarIndex(0);
    } else if (currentPage === "onboarding2") {
      setCurrentPage("onboarding1");
      setProgressBarIndex(1);
    } else if (currentPage === "onboarding3") {
      setCurrentPage("onboarding2");
      setProgressBarIndex(2);
    } else {
      navigate("/");
    }
  };

  const contextValue = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      progressBarIndex,
      setProgressBarIndex,
      handleNext,
      handleBack,
    }),
    [currentPage, progressBarIndex]
  );

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};
