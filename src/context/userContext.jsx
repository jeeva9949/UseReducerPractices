import React from "react";

const data = {
  name: "phani",
  age: 22,
};

export const userContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};
