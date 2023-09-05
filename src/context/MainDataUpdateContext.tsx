// MainDataUpdateContext.tsx
import React, { useState, createContext, useContext } from "react";
import { DroppedItem, selctedDetailsType } from "../components/DataType";
import { initialState, selctedDetails } from "../components/data";

export type AllDataContextType = {
  dataupdate: any;
  setDataupdate: React.Dispatch<React.SetStateAction<{
    draggedItem: DroppedItem[];
    selctedDetails: selctedDetailsType;
}>>
};

export const MainCalenderIdContext = createContext<{ draggedItem: DroppedItem[];
  selctedDetails: selctedDetailsType}>({
  "draggedItem": initialState,
  "selctedDetails": selctedDetails
});

const MainDataUpdateProvider = ({ children }: { children: JSX.Element }) => {
  const [dataupdate, setDataupdate] = useState<{ draggedItem: DroppedItem[];
    selctedDetails: selctedDetailsType}>({
    "draggedItem": initialState,
    "selctedDetails": selctedDetails
  });


  return (
    <MainCalenderIdContext.Provider value={{ dataupdate, setDataupdate }}>
      {children}
    </MainCalenderIdContext.Provider>
  );
};

export default MainDataUpdateProvider;
