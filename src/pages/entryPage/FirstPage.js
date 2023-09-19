//Outsource JS library
import React, { useContext } from "react";
//Internal JS
//Component Imports
//Context
import { EntryPageNavContext } from "../../context/EntryPageNavContext";
//Pages
//CSS Imports

function Firstpage({ isActive }) {
  const { setEntryPageNum } = useContext(EntryPageNavContext);

  return (
    <nav className="firstPageMainContainer">
      <h1 className={isActive ? "h1 active" : "h1"}>Welcome</h1>
      <button
        className={isActive ? "button active" : "button"}
        data-cy="entryPageGirisBtn"
        onClick={() => {
          setEntryPageNum(1);
        }}
      >
        Login
      </button>
      <button
        className={isActive ? "button active" : "button"}
        data-cy="entryPageKayitBtn"
        onClick={() => {
          setEntryPageNum(2);
        }}
      >
        Register
      </button>
    </nav>
  );
}

export default Firstpage;
