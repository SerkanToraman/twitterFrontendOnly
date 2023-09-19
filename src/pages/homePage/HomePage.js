//Outsource JS library
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

//Internal JS
import MainTweets from "./MainTweets";
//Store
//Components
import SendTweetComponent from "../../components/SendTweetComponent";
import SideBarComponent from "../../components/SideBarComponent";
import ScrollUpFunction from "../../components/ScrollUpFunction";

//Context
//Pages
//CSS

function HomePage() {
  return (
    <section className="homePageContainer">
      <SideBarComponent />
      <section className="pageMainSection">
        <SendTweetComponent />
        <section
          id="scrollToSection"
          className="homePageMainSectionDataSection"
        >
          <MainTweets />
        </section>
        <ScrollUpFunction />
      </section>
    </section>
  );
}

export default HomePage;
