import axios from 'axios'
import { REDDIT_CLIENT_SECRET, REDDIT_CLIENT_ID } from '../../constants'

export const ACCESS_TOKEN = 'ACCESS_TOKEN'
export const REDDIT_STATE = 'REDDIT_STATE'

const serverUrl = 'http://localhost:3001/forward/'

export function retrieveAccessToken(redditState, code, callback) {
  const config = {
    method: 'post',
    url: 'https://www.reddit.com/api/v1/access_token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: REDDIT_CLIENT_ID,
      password: REDDIT_CLIENT_SECRET
    },
    data: 'grant_type=authorization_code&code='+code+'&redirect_uri=http://localhost:3000/auth/reddit-redir'
  }
  const request = axios({
    method: 'post',
    url: serverUrl,
    data: config
  })
    .then((response) => {
      console.log('response:', response)
      callback(response)
    })
  return {
    type: ACCESS_TOKEN,
    payload: request
  }
}

export function saveRedditState(redditState) {
  return {
    type: REDDIT_STATE,
    payload: redditState
  }
}
