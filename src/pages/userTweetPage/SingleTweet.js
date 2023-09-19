//Outsource JS library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
//Internal JS
//Store
//import { getTweetByIdActionCreator } from "../../store/actions/tweetAction";
//Components
import DropDownComponent from "../../components/DropDownComponent";
//Context
import useAxios, { REQ_TYPES } from "../../endpoints/UseAxios";
//Pages
//CSS

function SingleTweet() {
  const { tweetId } = useParams();
  // const singleTweet = useSelector((store) => store.tweetReducer.singleTweet);
  const [getTweetById, tweetById, loading, error] = useAxios([]);
  useEffect(() => {
    getTweetById({
      endpoint: "/tweet/" + tweetId,
      reqType: REQ_TYPES.GET,
    });
  }, [tweetId]);
 
  return (
    <section id="singleTweetCardContainer" key={tweetById?.tweetId}>
      <div id="tweetCardImg">
        <i className="fa-solid fa-user fa-3x"></i>
      </div>
      <div id="tweetContainer">
        <div id="tweetContainerTop">
          <h3 id="tweetContainerTopName">{tweetById?.name}</h3>
          <div id="tweetContainerTopIconWrapper">
            <p id="tweetContainerTopTime">
              {moment(tweetById?.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <h3 id="tweetContainerTopUserName">@{tweetById?.userName}</h3>
        <div id="tweetContainerMid"> {tweetById?.tweet} </div>
      </div>
    </section>
  );
}

export default SingleTweet;
