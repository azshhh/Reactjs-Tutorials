import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListner,
  signOutUser,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  signOutUser();

  // Im only wanna run the inside fxn  once when component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      // If user sign-in => user object, if sign-out => null 
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
