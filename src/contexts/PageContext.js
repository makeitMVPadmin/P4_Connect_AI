import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("prompt");
  const [progressBarIndex, setProgressBarIndex] = useState(0);

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        progressBarIndex,
        setProgressBarIndex,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
