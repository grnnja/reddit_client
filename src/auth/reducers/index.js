import { ACCESS_TOKEN, REDDIT_STATE } from "../actions/index"

export default (state = {}, action) => {
  switch (action.type) {
    case ACCESS_TOKEN:
      console.log('access token', action)
      return { ...state, accessToken: action.payload }
    case REDDIT_STATE:
      console.log('state reducer called', action.payload)
      return { ...state, redditState: action.payload }
    default:
      return state;
  }
}
