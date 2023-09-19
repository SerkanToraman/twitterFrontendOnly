//Outsource JS library
import React from "react";
import { Route, Routes } from "react-router-dom";
//Internal JS
//Component Imports
//Context
import EntryPageProvider from "../context/EntryPageNavContext";
import PrivateRoute from "../context/PrivateRoute";
//Pages
import EntryPage from "../pages/entryPage/EntryPage";
import HomePage from "../pages/homePage/HomePage";
import UserTweetMainPage from "../pages/userTweetPage/UserTweetMainPage";
import UserTweetsList from "../pages/userTweetPage/UserTweetsList";
import SingleTweetDetailsPage from "../pages/userTweetPage/SingleTweetDetailsPage";
//CSS Imports
import "../scss/style.css";

function Main() {
  return (
    <div id="appContainer">
      <Routes>
        <Route
          path="/"
          element={
            <EntryPageProvider>
              <EntryPage />
            </EntryPageProvider>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/:userName"
          element={
            <PrivateRoute>
              <UserTweetMainPage />
            </PrivateRoute>
          }
        >
          <Route path="t" element={<UserTweetsList />} />
          <Route path=":tweetId" element={<SingleTweetDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
