//Outsource JS library
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment-timezone";
import { useDispatch } from "react-redux";

//Component
import DropDownComponent from "./DropDownComponent";

//Internal JS
import { AuthContext } from "../context/AuthContext";
import {
  sendDislikeCreator,
  sendLikesCreator,
  sendRetweetCreator,
  sendCancelRetweetCreator,
  sendDeleteRetweetsActionCreator,
  sendDeleteRetweetsThroughParentActionCreator,
  // getSubTweetsActionCreator,
} from "../store/actions/tweetAction";
import UseTweetCheck from "../localHook/UseTweetCheck";

function TweetCardComponent({ sourceTweet }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName, tweetId } = useParams();
  const [urlId] = useState(tweetId === null ? 0 : tweetId);
  const { loginData } = useContext(AuthContext);
  const [tweet, retweeter, like, setLike, retweet, setRetweet, retweetId] =
    UseTweetCheck(sourceTweet);

  const tweetLikeSubmit = (data) => {
    if (!like) {
      dispatch(sendLikesCreator(data, urlId,userName));
      setLike(true);
    } else if (like) {
      dispatch(sendDislikeCreator(data, urlId,userName));
      setLike(false);
    }
  };

  const tweetRetweetSubmit = (data) => {
    if (!retweet) {
      dispatch(sendRetweetCreator(data, urlId,userName));
      setRetweet(true);
    } else if (retweet) {
      dispatch(sendCancelRetweetCreator(data,userName));
      setRetweet(false);
      if (tweet.tweetResponse == null) {
        dispatch(
          sendDeleteRetweetsActionCreator({ deleteTweetId: retweetId }, urlId,userName)
        );
      } else {
        dispatch(
          sendDeleteRetweetsThroughParentActionCreator(
            {
              retweetId: retweetId,
              memberId: loginData.id,
            },
            urlId,userName
          )
        );
      }
    }
  };

  return (
    <section>
      {retweeter && (
        <div id="retweet">
          <div id="retweetIcon">
            <i
              id="tweetContainerIcons"
              className="fa-solid fa-retweet fa-lg"
            ></i>
          </div>
          <p id="retweetText">{loginData.userName===retweeter? "you ":retweeter} retweeted</p>
        </div>
      )}
      <section
        id="tweetCardContainer"
        key={tweet.tweet_id}
        onClick={() => {
          navigate("/" + tweet.userName + "/" + tweet.tweetId);
          window.location.reload();
        }}
      >
        <div id="tweetCardImg">
          <i className="fa-solid fa-user fa-xl"></i>
        </div>
        <div id="tweetContainer">
          <div id="tweetContainerTop">
            <h3
              id="tweetContainerTopName"
              onMouseDown={() => {
                navigate("/" + tweet.userName + "/t");
              }}
            >
              {tweet.name}
            </h3>
            <h3 id="tweetContainerTopUserName">@{tweet.userName}</h3>
            <div
              id="tweetContainerTopIconWrapper"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <p id="tweetContainerTopTime">
                {moment(tweet.createdAt).fromNow()}
              </p>
              <DropDownComponent sourceTweet={sourceTweet} />
            </div>
          </div>
          <div id="tweetContainerMid"> {tweet.tweet} </div>
          <div id="tweetContainerBottom">
            <button id="tweetContainerBottomMessageIcon_Wrapper">
              <div id="tweetContainerMessageIcon">
                <i
                  id="tweetContainerIcons"
                  className="fa-regular fa-comment fa-xl"
                ></i>
              </div>
              <p id="tweetContainerBottomText">
                {tweet.replyCount === 0 ? "" : tweet.replyCount}
              </p>
            </button>
            <button
              id={
                retweet === false
                  ? "tweetContainerBottomRetweetIcons_Wrapper"
                  : "tweetContainerBottomRetweetIcons_Wrapper_Retweeted"
              }
              onClick={(e) => {
                e.stopPropagation();
                tweetRetweetSubmit({
                  memberId: loginData.id,
                  tweetId: tweet.tweetId,
                });
              }}
            >
              <div id="tweetContainerRetweetIcon">
                <i
                  id="tweetContainerIcons"
                  className="fa-solid fa-retweet fa-xl"
                ></i>
              </div>
              <p id="tweetContainerRetweetCountText">
                {tweet.retweets.length === 0 ? "" : tweet.retweets.length}
              </p>
            </button>
            <button
              id={
                like === false
                  ? "tweetContainerBottomLikeIcons_Wrapper"
                  : "tweetContainerBottomLikeIcons_Wrapper_Liked"
              }
              onClick={(e) => {
                e.stopPropagation();
                tweetLikeSubmit({
                  memberId: loginData.id,
                  tweetId: tweet.tweetId,
                });
              }}
            >
              <div id="tweetContainerLikeIcon">
                <i
                  id="tweetContainerIcons"
                  className="fa-solid fa-heart fa-xl"
                ></i>
              </div>
              <p id="tweetContainerLikeCountText">
                {tweet.likes.length === 0 ? "" : tweet.likes.length}
              </p>
            </button>
            <div id="tweetContainerBottomIcons">
              <button id="tweetContainerCountIcon">
                <i
                  id="tweetContainerIcons"
                  className="fa-solid fa-chart-simple fa-xl"
                ></i>
              </button>
            </div>
            <div id="tweetContainerBottomIcons">
              <button id="tweetContainerForwardIcon">
                <i
                  id="tweetContainerIcons"
                  className="fa-regular fa-share-from-square fa-xl"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TweetCardComponent;
