//Outsource JS library
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//Internal JS
import { AuthContext } from "../context/AuthContext";
import { sendTweetsActionCreator } from "../store/actions/tweetAction";
//Store
//Components
//Context
//Pages
//CSS

function SendTweetComponent() {
  const { tweetId } = useParams();
  const[parentId]=useState(tweetId===null?0:tweetId);
  const dispatch = useDispatch();
  const { loginData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      memberId: loginData.id,
      parentId: parentId,
      tweet: "",
    },
  });

  const loginHandleSubmit = (data) => {
    dispatch(sendTweetsActionCreator(data,parentId));
    reset();
  };

  return (
    <section className="sendTweetMainContainer">
      <form
        className="sendTweetForm"
        onSubmit={handleSubmit(loginHandleSubmit)}
      >
        <label className="sendTweetLabel">Send your tweet</label>
        <textarea
          className="sendTweetInput"
          data-cy="loginDataName"
          type="text"
          placeholder="What is happening?!"
          maxLength="128"
          {...register("tweet")}
        />
        <div className="sendTweetButtonWrapper">
          <button data-cy="sendTweetSbmtBtn" type="submit">
            Tweet
          </button>
        </div>
      </form>
    </section>
  );
}

export default SendTweetComponent;
