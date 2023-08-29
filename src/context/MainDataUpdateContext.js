import React, { useState } from "react";
export const MainDataUpdateContext = React.createContext();

const MainDataUpdateProvider = ({ children }) => {
  const [dataupdate, setDataupdate] = useState();
  const addDataupdate = (newValue) => {
    setDataupdate(newValue);
  };
  return (
    <MainDataUpdateContext.Provider value={{ dataupdate, addCalendarID }}>
      {children}
    </MainDataUpdateContext.Provider>
  );
};

export default MainDataUpdateProvider;
