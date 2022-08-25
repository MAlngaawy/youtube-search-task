import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = [];

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  return (
    <StateContext.Provider value={{ data, setData }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
