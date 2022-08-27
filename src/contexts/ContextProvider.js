import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("input");
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.onresize = () => {
      setScreenWidth(window.innerWidth);
    };
  }, [screenWidth, data]);

  return (
    <StateContext.Provider
      value={{ data, setData, search, setSearch, screenWidth }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
