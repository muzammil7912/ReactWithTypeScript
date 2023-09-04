import React, { useState, createContext, useContext } from "react";

export type AllDataContextType = {
  dataupdate: any;
};

const [dataupdate, setDataupdate] = useState<AllDataContextType>("");

const MainDataUpdateProvider = ({ children }: { children: JSX.Element }) => {
  const [dataupdate, setDataupdate] = useState<any>(null);

  const addDataupdate = (newValue: any) => {
    setDataupdate(newValue);
  };

  return (
    <MainDataUpdateContext.Provider value={{ dataupdate, addDataupdate }}>
      {children}
    </MainDataUpdateContext.Provider>
  );
};

export default MainDataUpdateProvider;
