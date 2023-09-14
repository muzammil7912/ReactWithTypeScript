import React, { useState, createContext } from "react";
import { DroppedItem, selctedDetailsType } from "../components/DataType";
import { initialState, selctedDetails } from "../components/data";

export type AllDataContextType = {
  dataupdate: {
    draggedItem: DroppedItem[] | [];
    selctedDetails: selctedDetailsType;
  };
  setDataupdate: React.Dispatch<React.SetStateAction<{
    draggedItem: DroppedItem[];
    selctedDetails: selctedDetailsType;
  }>>;
};

export const MainCalenderIdContext = createContext<AllDataContextType | undefined>(
  undefined
);

const MainDataUpdateProvider = ({ children }: { children: JSX.Element }) => {
  const [dataupdate, setDataupdate] = useState<AllDataContextType['dataupdate']>({
    draggedItem: [],
    selctedDetails: selctedDetails,
  });

  return (
    <MainCalenderIdContext.Provider value={{ dataupdate, setDataupdate }}>
      {children}
    </MainCalenderIdContext.Provider>
  );
};

export default MainDataUpdateProvider;
