import { useEffect, useState } from "react";
import { authContext } from "../contexts/auth-context";
import { getSavedUser, saveUser } from "../helper";

function AuthContextProvider({ children }) {
  const [userData, setState] = useState(null);

  const savedUserData = getSavedUser();

  if (savedUserData && !userData) {
    saveUser(savedUserData);
    setState(savedUserData);
  }

  return (
    <authContext.Provider value={[userData, setUserData]}>
      {children}
    </authContext.Provider>
  );

  function setUserData(value) {
    saveUser(value);
    setState(value);
  }
}

export default AuthContextProvider;
