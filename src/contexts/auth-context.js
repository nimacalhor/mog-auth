import { useContext } from "react";
import { createContext } from "react";

export const authContext = createContext();

function useAuth() {
  return useContext(authContext);
}

export { useAuth };
