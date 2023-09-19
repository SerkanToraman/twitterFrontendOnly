//Outsource JS library
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//Internal JS
//Component
//Context
import { AuthContext } from "../../context/AuthContext";
import { EntryPageNavContext } from "../../context/EntryPageNavContext";
//Pages

function Login() {
  const navigate = useNavigate();
  const {
    loginHandleSubmitContext,
    isLoggedIn,
    errorReponse,
    setErrorResponse,
  } = useContext(AuthContext);
  const { setEntryPageNum } = useContext(EntryPageNavContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const loginHandleSubmit = (data) => {
    loginHandleSubmitContext(data);
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setTimeout(() => {
      setErrorResponse("");
    }, 2000);
  }, [errorReponse]);

  return (
    <section className="firstPageLoginMainContainer">
      <button
        className="loginExitIcon"
        onClick={() => {
          setEntryPageNum(0);
        }}
      >
        <i className="fa-sharp fa-regular fa-circle-xmark fa-4x"></i>
      </button>
      <form
        className="entryPageForm"
        onSubmit={handleSubmit(loginHandleSubmit)}
      >
        <h2 dt-cy="loginFormH2">Login</h2>
        <label htmlFor="title "> Email</label>
        <input
          data-cy="loginDataName"
          type="text"
          placeholder="Email"
          {...register("email", { required: "Please enter your email" })}
        />
        {errors?.email && <p className="formError">{errors.email.message}</p>}
        <label htmlFor="title "> Password</label>
        <input
          data-cy="loginPassword"
          type="text"
          placeholder="Password"
          {...register("password", { required: "Please enter your password" })}
        />
        {errors?.password && (
          <p className="formError">{errors.password.message}</p>
        )}
        <button data-cy="loginSbmtBtn" type="submit">
          Submit
        </button>
        {errorReponse && <p className="axiosError">{errorReponse}</p>}
      </form>
    </section>
  );
}

export default Login;
