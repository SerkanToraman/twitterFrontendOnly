//Outsource JS library
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//Internal JS
//Components
import TweetCardComponent from "../../components/TweetCardComponent";
import SendTweetComponent from "../../components/SendTweetComponent";
import SingleTweet from "./SingleTweet";
//Context
import { AuthContext } from "../../context/AuthContext";
//Store
import { getSubTweetsActionCreator } from "../../store/actions/tweetAction";
//Pages
//CSS

function SingleTweetDetailsPage() {
  const dispatch = useDispatch();
  const { tweetId } = useParams();
  const childTweetById = useSelector((store) => store.tweetReducer.subPage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getSubTweetsActionCreator(tweetId));
 
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 500);

    
    return () => {
      clearTimeout(loadingTimer);
    };
  }, [tweetId]);

  return (
    <>
      {isLoading ? (
        <div class="spinner-border m-5" role="status">
          <span class="sr-only"></span>
        </div>
      ) : (
        <>
          <SingleTweet />
          <SendTweetComponent />
          <div className="tweetCardsMainContainer">
            {childTweetById?.map((tweetitem, i) => (
              <TweetCardComponent sourceTweet={tweetitem} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default SingleTweetDetailsPage;
