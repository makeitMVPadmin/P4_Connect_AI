import { createContext, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [progressBarIndex, setProgressBarIndex] = useState(0);
  const [userFeedback, setUserFeedback] = useState({});

  const progressArray = useMemo(
    () => ["prompt", "onboarding1", "onboarding2", "onboarding3"],
    []
  );

  const updateUserFeedback = useCallback((key, value) => {
    setUserFeedback((prevFeedback) => {
      const newFeedback = { ...prevFeedback, [key]: value };
      return newFeedback;
    });
  }, []);

  const handleNext = useCallback(() => {
    const maxPages = progressArray.length - 1;

    if (currentPageIndex < maxPages) {
      setProgressBarIndex((prevIndex) => prevIndex + 1);
      setCurrentPageIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/ChallengePage");
    }
  }, [currentPageIndex, navigate, progressArray]);

  const handleBack = useCallback(() => {
    if (progressBarIndex > 0 && currentPageIndex > 0) {
      setProgressBarIndex((prevIndex) => prevIndex - 1);
      setCurrentPageIndex((prevIndex) => prevIndex - 1);
    } else {
      navigate("/");
    }
  }, [currentPageIndex, navigate, progressBarIndex]);

  const contextValue = useMemo(
    () => ({
      currentPageIndex,
      setCurrentPageIndex,
      progressBarIndex,
      setProgressBarIndex,
      handleNext,
      handleBack,
      progressArray,
      userFeedback,
      updateUserFeedback,
    }),
    [
      currentPageIndex,
      progressBarIndex,
      handleNext,
      handleBack,
      progressArray,
      userFeedback,
      updateUserFeedback,
    ]
  );

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};
