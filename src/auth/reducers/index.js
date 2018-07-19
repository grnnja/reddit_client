import { ACCESS_TOKEN, REDDIT_STATE } from "../actions/index"

export default (state = {}, action) => {
  switch(action.type) {
    case ACCESS_TOKEN:
      return {...state, accessToken: action.payload}
    case REDDIT_STATE:
      return {...state, redditState: action.payload}
    default:
      return state;
  }
}

