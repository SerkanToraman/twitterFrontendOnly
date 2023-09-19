//Outsource JS library
import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
//Internal JS
//Component Imports
//Context
import { EntryPageNavContext } from "../../context/EntryPageNavContext";
//Pages
//CSS Imports


function RegisterUser() {
  const { setEntryPageNum } = useContext(EntryPageNavContext);
  const [registerErrorReponse, setRegisterErrorReponse] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const registerHandleSubmit = (data) => {
   axios
      .post("http://localhost:8080/auth/register", data)
      .then((res) => {
        setEntryPageNum(1);
      })
      .catch((err) => {
        setRegisterErrorReponse(err.response.data.message);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setRegisterErrorReponse("");
    }, 2000);
  }, [registerErrorReponse]);

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

      <form className="entryPageForm" onSubmit={handleSubmit(registerHandleSubmit)}>
        <h2>Register</h2>
        <label htmlFor="title ">Name</label>
        <input
          data-cy="registerDataName"
          type="text"
          placeholder="Name"
          {...register("name", { required: "Please enter your name" })}
        />
        {errors?.name && <p className="formError">{errors.name.message}</p>}
        <label htmlFor="title "> Username </label>
        <input
          data-cy="registerUserName"
          type="text"
          placeholder="Username"
          {...register("userName", { required: "Please enter your username" })}
        />
        {errors?.userName && <p className="formError">{errors.userName.message}</p>}
        <label htmlFor="title "> E-mail</label>
        <input
          data-cy="registerUserEmail"
          type="text"
          placeholder="E-mail"
          {...register("email", { required: "Please enter your E-mail" })}
        />
        {errors?.email && <p className="formError">{errors.email.message}</p>}
        <label htmlFor="title "> Password </label>
        <input
          data-cy="registerPassword"
          type="text"
          placeholder="Password"
          {...register("password", { required: "Please enter password" })}
        />
        {errors?.password && <p className="formError">{errors.password.message}</p>}

        <button data-cy="registerSbmtBtn" type="submit">
          Submit
        </button>
        {registerErrorReponse && <p className="axiosError">{registerErrorReponse}</p>}
      </form>
    </section>
  );
}

export default RegisterUser;
