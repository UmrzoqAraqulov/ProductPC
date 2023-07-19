import { createContext, useState } from "react"

export const LoginInfo = createContext();

const LoginContext = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || false
  );
  const state = {
    auth,
    setAuth,
  };
  return <LoginInfo.Provider value={state}>{children}</LoginInfo.Provider>;
};

export default LoginContext