//Outsource JS library

//Internal JS
import axiosWithAuth from "../../endpoints/AxiosAuth";

//Action Creators

export const tweetActions = {
  getTweets: "GET_TWEETS",
  getSubTweets: "GET_SUBTWEETS",
  getUserTweets: "GET_SUBTWEETSSUBS",
  sendSubTweets: "SEND_SUBTWEETS",
  getSingleTweet: "GET_SINGLETWEET",
  likeTweet: "LIKE_TWEET",
  dislikeTweet: "DISLIKE_TWEET",
  retweet: "RETWEET_TWEET",
  cancelRtweet: "CANCELRETWEET_TWEET",
};

export const getTweetsActionCreator = () => (dispatch) => {
  axiosWithAuth()
    .get("/tweet/mainpage")
    .then((res) => {
      dispatch({
        type: tweetActions.getTweets,
        payload: res.data,
      });
    });
};
export const sendDeleteRetweetsActionCreator =
  (data, urlId, userName) => (dispatch) => {
    axiosWithAuth()
      .post("/tweet/deleteretweet", data)
      .then((res) => {
        userName === undefined
          ? dispatch(getTweetsActionCreator())
          : urlId === undefined
          ? dispatch(getUserTweetsActionCreator(userName))
          : dispatch(getSubTweetsActionCreator(urlId));
      })
      .catch((error) => {
        console.error("Error deleting retweet:", error);
      });
  };
export const sendDeleteRetweetsThroughParentActionCreator =
  (data, urlId, userName) => (dispatch) => {
    axiosWithAuth()
      .post("/tweet/deleteretweetv2", data)
      .then((res) => {
        userName === undefined
          ? dispatch(getTweetsActionCreator())
          : urlId === undefined
          ? dispatch(getUserTweetsActionCreator(userName))
          : dispatch(getSubTweetsActionCreator(urlId));
      });
  };
export const sendTweetsActionCreator = (data, parentId) => (dispatch) => {
  axiosWithAuth()
    .post("/tweet/", data)
    .then((res) => {
      parentId === undefined
        ? dispatch(getTweetsActionCreator())
        : dispatch(getSubTweetsActionCreator(parentId));
    });
};

export const deleteTweetsActionCreator =
  (data, urlId, userName) => (dispatch) => {
    axiosWithAuth()
      .post("/tweet/deletetweet", data)
      .then((res) => {
        userName === undefined
          ? dispatch(getTweetsActionCreator())
          : urlId === undefined
          ? dispatch(getUserTweetsActionCreator(userName))
          : dispatch(getSubTweetsActionCreator(urlId));
      });
  };

export const getSubTweetsActionCreator = (tweetId) => (dispatch) => {
  axiosWithAuth()
    .get("/tweet/parent/" + tweetId)
    .then((res) => {
      dispatch({
        type: tweetActions.getSubTweets,
        payload: res.data,
      });
    });
};

export const getUserTweetsActionCreator = (userName) => (dispatch) => {
  axiosWithAuth()
    .get("tweet/membertweet/" + userName)
    .then((res) => {
      dispatch({
        type: tweetActions.getUserTweets,
        payload: res.data,
      });
    });
};

export const getTweetByIdActionCreator = (tweetid) => (dispatch) => {
  axiosWithAuth()
    .get("/tweet/" + tweetid)
    .then((res) => {
      dispatch({
        type: tweetActions.getSingleTweet,
        payload: res.data,
      });
    });
};

export const sendLikesCreator = (data, urlId, userName) => (dispatch) => {
  axiosWithAuth()
    .post("/tweet/like", data)
    .then((res) => {
      userName === undefined
        ? dispatch(getTweetsActionCreator())
        : urlId === undefined
        ? dispatch(getUserTweetsActionCreator(userName))
        : dispatch(getSubTweetsActionCreator(urlId));
    });
};
export const sendDislikeCreator = (data, urlId, userName) => (dispatch) => {
  axiosWithAuth()
    .post("/tweet/dislike", data)
    .then((res) => {
      userName === undefined
        ? dispatch(getTweetsActionCreator())
        : urlId === undefined
        ? dispatch(getUserTweetsActionCreator(userName))
        : dispatch(getSubTweetsActionCreator(urlId));
    });
};
export const sendRetweetCreator = (data, urlId, userName) => (dispatch) => {
  axiosWithAuth()
    .post("tweet/retweet", data)
    .then((res) => {
      userName === undefined
        ? dispatch(getTweetsActionCreator())
        : urlId === undefined
        ? dispatch(getUserTweetsActionCreator(userName))
        : dispatch(getSubTweetsActionCreator(urlId));
    });
};
export const sendCancelRetweetCreator = (data, userName) => (dispatch) => {
  axiosWithAuth()
    .post("tweet/cancelretweet", data)
    .then((res) => {
      userName === undefined
        ? dispatch(getTweetsActionCreator())
        : dispatch(getUserTweetsActionCreator(userName));
    });
};

export const editTweetCreator = (data, urlId, userName) => (dispatch) => {
  axiosWithAuth()
    .post("tweet/updateTweet", data)
    .then((res) => {
      userName === undefined
        ? dispatch(getTweetsActionCreator())
        : urlId === undefined
        ? dispatch(getUserTweetsActionCreator(userName))
        : dispatch(getSubTweetsActionCreator(urlId));
    });
};
