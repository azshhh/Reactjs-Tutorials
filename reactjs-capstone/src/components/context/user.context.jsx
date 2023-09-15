import { createContext } from "react";

// This is actual values, or Context where user values are stored
export const UserContext = createContext({});

// This provider, provides the user values to the child it recieves (say <App />)
export const UserProvider = ({ children }) => {
    // Here value={}, which means this UserContext.Provider holds the values from UserContext to provide it to children
  return <UserContext.Provider value={}>{children}</UserContext.Provider>;
};
