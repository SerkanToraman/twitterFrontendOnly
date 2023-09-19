import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SideBarComponent() {
  const navigate = useNavigate();
  const { loginData, logOut } = useContext(AuthContext);
  return (
    <section className="homePageleftNavBar">
      <h2 data-cy="homePageWelcome">{loginData.userName}</h2>
      <nav className="homePageleftNavBarMainBtns">
        <button
          className="homePageleftNavBarBtn"
          onClick={() => {
            navigate("/home");
          }}
        >
          Home Page
        </button>
      </nav>
      <nav className="homePageleftNavBarPersonalBtns">
        <button
          className="logoutBtn"
          onClick={() => {
            logOut();
            navigate("/");
          }}
        >
          Logout
        </button>
      </nav>
    </section>
  );
}

export default SideBarComponent;
