import axios from 'axios'
import qs from 'qs'

export const POSTS = 'POSTS'
export const POST_AND_COMMENTS = 'POST_AND_COMMENTS'
export const SET_POST = 'SET_POST'
export const COMMENTS = 'COMMENTS'
export const APPBAR_HEIGHT = 'APPBAR_HEIGHT'
export const VOTE = 'UPVOTE'

const makeServerRequest = (method, path, accessToken, expireTime, data) => {
  let config = {
    method,
    url: `https://reddit.com/${path}`,
    headers: {
      'User-Agent': 'web app:client for reddit:v0.1 (by /u/grnnja)'
    },
    ...data
  }

  if (accessToken) {
    const time = new Date().getTime()
    //if (expireTime > time) 
    config = { 
      ...config,
      url: `https://oauth.reddit.com/${path}`,
      headers: {
        ...config.headers,
        Authorization: `bearer ${accessToken}`
      }
    }
    console.log('axios config', config)
    console.log('data', data)
  }
  const serverUrl = 'http://localhost:3001/forward/'
  return axios.post(serverUrl, config)
}

export function getPosts(subreddit, type, accessToken) {
  const request = makeServerRequest('get', `r/${subreddit}/${type}.json?limit=25`, accessToken)
  return {
    type: POSTS,
    payload: request
  }
}

export function getPostWithComments(subreddit, id, accessToken) {
  const request = makeServerRequest('get', `r/${subreddit}/comments/${id}.json`, accessToken)
  return {
    type: POST_AND_COMMENTS,
    payload: request
  }
}

export function setCurrentPost(post) {
  return {
    type: SET_POST,
    payload: post
  }
}

export function getComments(subreddit, id, accessToken) {
  const request = makeServerRequest('get', `r/${subreddit}/comments/${id}.json`, accessToken)
  return {
    type: COMMENTS,
    payload: request
  }
}

export function setAppBarHeight(height) {
  return {
    type: APPBAR_HEIGHT,
    payload: height
  }
}

export function vote(id, direction, accessToken, expireTime) {
  makeServerRequest('post', 'api/vote', accessToken, expireTime,{
    data: qs.stringify({
      dir: direction,
      id,
      rank: 2,
    })
  })
  return {
    type: VOTE,
    payload: {
      id,
      direction
    }
  }
}
