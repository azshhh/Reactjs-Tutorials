import { createContext, useState } from "react";

// This is actual values, or Context where user values are stored
export const UserContext = createContext({
  // Build base empty state of the user
  currentUser: null,
  setCurrentUser: () => null,
});

// This provider, provides the user values to the child it recieves (say <App />)
export const UserProvider = ({ children }) => {
  //We want the currentUser value, initially it is null, using useState hook we gonna update the user
  const [currentUser, setCurrentUser] = useState(null);

  // UserContext.Provider will hold user values to provide to its children
  const value = { currentUser, setCurrentUser };

  // Here value={}, which means this UserContext.Provider holds the values from UserContext to provide it to children
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
