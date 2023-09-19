//Outsource JS library
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Internal JS

//Store
import { getTweetsActionCreator } from "../../store/actions/tweetAction";

//Components
import TweetCardComponent from "../../components/TweetCardComponent";

//Context
//Pages
//CSS

function MainTweets() {
  const dispatch = useDispatch();
  const tweets = useSelector((store) => store.tweetReducer.tweets);

  useEffect(() => {
    dispatch(getTweetsActionCreator());
  }, []);

  return (
    <div className="tweetCardsMainContainer">
      {tweets?.map((tweetItem, i) => (
        <TweetCardComponent sourceTweet={tweetItem} key={i} />
      ))}
    </div>
  );
}

export default MainTweets;
