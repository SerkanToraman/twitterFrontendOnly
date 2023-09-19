//Outsource JS library
import { createContext, useState } from "react";
import axios from "axios";
import React from "react";
//Internal JS
import useLocalStorage from "../localHook/UseLocalStorage";
//Component
//Context
//Pages
//CSS

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useLocalStorage("user", {});
  const [errorReponse, setErrorResponse] = useState();

  let isLoggedIn = loginData && loginData.token;

  // this Context goes to LoginForm
  const loginHandleSubmitContext = (user) => {
    axios
      .post("http://localhost:8080/auth/login", user)
      .then((res) => {
        res.data && setLoginData(res.data);
      })
      .catch((err) => setErrorResponse(err.response.data.message));
  };

  const logOut = () => {
    // axiosWithAuth()
    //   .get("/api/auth/logout")
    //   .then(()=>{
    setLoginData({});
    //   }).catch((err) =>
    // setErrorResponse(err.response.data.message)
    // );
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandleSubmitContext,
        isLoggedIn,
        logOut,
        loginData,
        errorReponse,
        setErrorResponse,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
