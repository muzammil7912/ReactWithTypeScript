// MainDataUpdateContext.tsx
import React, { useState, createContext, useContext } from "react";

export type AllDataContextType = {
  dataupdate: any;
  addDataupdate: (newValue: any) => void;
};

export const MainCalenderIdContext = createContext<AllDataContextType | undefined>(
  undefined
);

const MainDataUpdateProvider = ({ children }: { children: JSX.Element }) => {
  const [dataupdate, setDataupdate] = useState<any>(null);

  const addDataupdate = (newValue: any) => {
    setDataupdate(newValue);
  };

  return (
    <MainCalenderIdContext.Provider value={{ dataupdate, addDataupdate }}>
      {children}
    </MainCalenderIdContext.Provider>
  );
};

export default MainDataUpdateProvider;
