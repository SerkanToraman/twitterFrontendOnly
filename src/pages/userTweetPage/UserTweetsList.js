//Outsource JS library
import React,{useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//Internal JS
//Components
import TweetCardComponent from '../../components/TweetCardComponent';
//Context
import { AuthContext } from '../../context/AuthContext';
//Store
import { getUserTweetsActionCreator } from '../../store/actions/tweetAction';
//Pages
//CSS

function UserTweetsList() {
  const { userName } = useParams();
  const dispatch = useDispatch();

  const tweets = useSelector((store) => store.tweetReducer.userPage);
  useEffect(() => {
    dispatch(getUserTweetsActionCreator(userName));
  }, []);

  return (
     <div className="tweetCardsMainContainer">
      {tweets?.map((tweetitem, i) => (
        <TweetCardComponent sourceTweet={tweetitem} key={i} />
      ))}
      
    </div>
  )
}

export default UserTweetsList
