import { tweetActions, homePageResetIncrease } from "../actions/tweetAction";

const initialState = {
  tweets: [],
  subPage: [],
  userPage: [],
  //singleTweet: [],
  // likeCount: [],
};

export function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case tweetActions.getTweets:
      return { ...state,tweets: [...action.payload] };
    case tweetActions.getSubTweets:
      return { ...state,subPage: [...action.payload] };
    case tweetActions.getUserTweets:
      return { ...state,userPage: [...action.payload] };
    // case tweetActions.getSingleTweet:
    //   return { ...state,singleTweet: action.payload };
    default:
      return state;
  }
}
