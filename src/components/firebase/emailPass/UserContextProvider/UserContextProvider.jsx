import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../../../../firebase.config";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  // observer user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });

    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  const userAuthInfo = {
    user,
    // setUser,
    userLoading,
    setUserLoading,
  };
  return (
    <UserContext.Provider value={userAuthInfo}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
