//Outsource JS library
import React,{useContext} from 'react'
import { Outlet, useNavigate } from "react-router-dom";
//Internal JS
//Components
import SideBarComponent from '../../components/SideBarComponent';
//Context
import { AuthContext } from '../../context/AuthContext';
//Store
//Pages
//CSS


function UserTweetMainPage() {
  const navigate = useNavigate();
   const { logOut } = useContext(AuthContext);
  return (
    <section className="userTweetMainPageContainer">
      <SideBarComponent />
      <section className="pageMainSection">
        <Outlet />
      </section>
    </section>
   
  )
}

export default UserTweetMainPage