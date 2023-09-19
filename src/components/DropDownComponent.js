//Outsource JS library
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//Internal JS
import { deleteTweetsActionCreator,editTweetCreator } from "../store/actions/tweetAction";
import UseTweetCheck from "../localHook/UseTweetCheck";
//Components
//Context
import { AuthContext } from "../context/AuthContext";
//Pages
//CSS

function DropDownComponent({ sourceTweet }) {
  const { loginData } = useContext(AuthContext);
  const { userName, tweetId } = useParams();
  console.log(loginData.id);
  const dispatch = useDispatch();
  const deleteTweetSubmit = (data) => {
    dispatch(deleteTweetsActionCreator(data, tweetId,userName));
  };
  const editTweetSubmit = (data) => {
    dispatch(editTweetCreator(data,tweetId,userName ));
  };
  return (
    <div className="btn-group">
      <button
        className="btn btn-primary btn-sm"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ...
      </button>
      <ul className="dropdown-menu">
        {/* <li>
          <button className="dropdown-item"
          disabled={
           !(sourceTweet.memberId === loginData.id)}
           onClick={() => {
            editTweetSubmit({ tweet: sourceTweet.tweet, tweetId:sourceTweettweetId });
            
          }}
          >
            <i className="bi bi-pencil"></i>
            Edit Tweet
          </button>
        </li> */}
        <li>
          <button
            className="dropdown-item"
            disabled={
              sourceTweet.retweetId > 0 || !(sourceTweet.memberId === loginData.id)
            }
            
            onClick={() => {
              deleteTweetSubmit({ deleteTweetId: sourceTweet.tweetId });
            }}
          >
            <i className="bi bi-trash"></i>
            Delete Tweet
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DropDownComponent;
