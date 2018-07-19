import {REDDIT_CLIENT_SECRET, REDDIT_CLIENT_ID} from '../../constants'
import axios from 'axios'
import base64 from 'base-64'

export const ACCESS_TOKEN = 'ACCESS_TOKEN'
export const REDDIT_STATE = 'REDDIT_STATE'

export function retrieveAccessToken(redditState,code,callback) {
  const root_url = 'https://www.reddit.com/api/v1/access_token'
  const data = 'grant_type=authorization_code&code='+code+'&redirect_uri=http://localhost:3000/auth/reddit-redir'
  //  {
  //   grant_type: 'authorization_code',
  //   code: code,
  //   redirect_uri: 'http://localhost:3000/auth/reddit-redir'
  // }
  const http_basic_auth_string = base64.encode(`${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`)
  const headers = {
    Authorization: `Basic ${http_basic_auth_string}`
  }
    const request = axios.post(root_url, {data, headers: headers})
    .then(() => callback())
  return{
    type: ACCESS_TOKEN,
    payload: request
  }
}

export function saveRedditState(redditState) {
  return{
    type: REDDIT_STATE,
    payload: redditState
  }
}