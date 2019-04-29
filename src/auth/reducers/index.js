import { ACCESS_TOKEN, REDDIT_STATE, CLEAR_ACCESS_TOKEN } from '../actions/index'

export default (state = {}, action) => {
  switch (action.type) {
    case ACCESS_TOKEN:
      console.log('access token', action.payload.data)
      const time = new Date().getTime()
      console.log("time:", time)
      const expireTime = time + action.payload.data.expires_in*1000
      return { ...state, accessToken: action.payload.data.access_token, expireTime: expireTime }
    case CLEAR_ACCESS_TOKEN:
      console.log('accesstoken cleared')
      return { ...state, accessToken: undefined }
    case REDDIT_STATE:
      return { ...state, redditState: action.payload }
    default:
      return state;
  }
}
