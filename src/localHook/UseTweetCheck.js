import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UseTweetCheck(originalTweet) {
  const { loginData } = useContext(AuthContext);
  const [retweeter, setRetweeter] = useState("");
  const [tweet, setTweet] = useState(originalTweet);
  const [like, setLike] = useState(
    originalTweet.likes.find((item) => item.memberId === loginData.id)
      ? true
      : false
  );
  const [retweet, setRetweet] = useState(
    originalTweet.retweets.find((item) => item.memberId === loginData.id)
      ? true
      : false
  );
  const [retweetId, setRetweetId] = useState(0);

  useEffect(() => {
    if (
      originalTweet.tweetResponse !== null &&
      originalTweet.tweetResponse.tweetId !== 0
    ) {
      setRetweeter(originalTweet.userName);
      setTweet(originalTweet.tweetResponse);
      setLike(
        originalTweet.tweetResponse.likes.find(
          (item) => item.memberId === loginData.id
        )
          ? true
          : false
      );
      setRetweet(
        originalTweet.tweetResponse.retweets.find(
          (item) => item.memberId === loginData.id
        )
          ? true
          : false
      );
      setRetweetId(originalTweet.tweetId);
    } else {
      setTweet(originalTweet);
      setRetweeter("");
      setLike(
        originalTweet.likes.find((item) => item.memberId === loginData.id)
          ? true
          : false
      );
      setRetweet(
        originalTweet.retweets.find((item) => item.memberId === loginData.id)
          ? true
          : false
      );
      setRetweetId(originalTweet.tweetId);
    }
  }, [originalTweet]);
  return [
    tweet,
    retweeter,
    like,
    setLike,
    retweet,
    setRetweet,
    retweetId,
    originalTweet,
  ];
}
