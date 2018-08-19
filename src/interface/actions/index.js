import axios from 'axios'

export const POSTS = 'POSTS'
export const POST_AND_COMMENTS = 'POST_AND_COMMENTS'
export const SET_POST = 'SET_POST'
export const COMMENTS = 'COMMENTS'
export const APPBAR_HEIGHT = 'APPBAR_HEIGHT'

const makeServerRequest = (method, path) => {
  const config = {
    method,
    url: `https://www.reddit.com/${path}`,
    // headers: {
    //   Authorization: `bearer 52a94b1b-2387-41f8-8182-01a4c6f60ddf`
    // }
  }
  const serverUrl = 'http://localhost:3001/forward/'
  return axios.post(serverUrl, config)
}


export function getPosts(subreddit, type) {
  const request = makeServerRequest('get', `r/${subreddit}/${type}/.json?limit=25`)
  return {
    type: POSTS,
    payload: request
  }
}

export function getPostWithComments(subreddit, id) {
  const request = makeServerRequest('get', `r/${subreddit}/comments/${id}/.json`)
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

export function getComments(subreddit, id) {
  const request = makeServerRequest('get', `r/${subreddit}/comments/${id}/.json`)
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
