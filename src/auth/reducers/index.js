import { ACCESS_TOKEN, REDDIT_STATE, CLEAR_ACCESS_TOKEN } from '../actions/index'

export default (state = {}, action) => {
  switch (action.type) {
    case ACCESS_TOKEN:
      console.log('access token', action.payload.data)
      return { ...state, accessToken: action.payload.data.access_token }
    case CLEAR_ACCESS_TOKEN:
      console.log('accesstoken cleared')
      return { ...state, accessToken: undefined }
    case REDDIT_STATE:
      return { ...state, redditState: action.payload }
    default:
      return state;
  }
}
