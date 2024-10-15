import { createContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [progressBarIndex, setProgressBarIndex] = useState(0);

  const progressArray = ["prompt", "onboarding1", "onboarding2", "onboarding3"];

  const handleNext = () => {
    const maxPages = progressArray.length - 1;

    if (currentPageIndex < maxPages) {
      setProgressBarIndex((prevIndex) => prevIndex + 1);
      setCurrentPageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (progressBarIndex > 0 && currentPageIndex > 0) {
      setProgressBarIndex((prevIndex) => prevIndex - 1);
      setCurrentPageIndex((prevIndex) => prevIndex - 1);
    } else {
      navigate("/");
    }
  };

  const contextValue = useMemo(
    () => ({
      currentPageIndex,
      setCurrentPageIndex,
      progressBarIndex,
      setProgressBarIndex,
      handleNext,
      handleBack,
      progressArray,
    }),
    [currentPageIndex, progressBarIndex]
  );

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};
