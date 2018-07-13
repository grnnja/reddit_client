import {REDDIT_CLIENT_SECRET, REDDIT_CLIENT_ID} from '../../constants'
import uuid4 from "uuid"
import axios from "axios";

export const AUTH_CODE = "auth_code"

export const requestAuth = () => {
  const url = "https://ssl.reddit.com/api/v1/authorize?"
  const redirectUri = "http://localhost:3000/auth/reddit-redir"
  const params = {
    client_id: REDDIT_CLIENT_ID,
    response_type: "code",
    state: uuid4(),
    redirect_uri: redirectUri,
    duration: "temporary",
    scope: "identity",
  
  }
  const headers = {
    'Access-Control-Allow-Origin': "*"
  }
  const request = axios.get(url, { params })
    .then((response) => console.log(response))
  return{
    type: AUTH_CODE,
    payload: request
  }

}