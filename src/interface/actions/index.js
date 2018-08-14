import axios from 'axios'

export const POSTS = 'POSTS'
export const POST_AND_COMMENTS = 'POST_AND_COMMENTS'
export const SET_POST = 'SET_POST'
export const COMMENTS = 'COMMENTS'
export const APPBAR_HEIGHT = 'APPBAR_HEIGHT'

const serverUrl = 'http://localhost:3001/forward/'

export function getPosts(subreddit, type) {
  const config = {
    method: 'get',
    url: `https://www.reddit.com/r/${subreddit}/${type}/.json?limit=25`
  }
  const request = axios.post(serverUrl, config)
  return {
    type: POSTS,
    payload: request
  }
}

export function getPostWithComments(subreddit, id) {
  const config = {
    method: 'get',
    url: `https://www.reddit.com/r/${subreddit}/comments/${id}/.json`
  }
  const request = axios.post(serverUrl, config)
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
  const config = {
    method: 'get',
    url: `https://www.reddit.com/r/${subreddit}/comments/${id}/.json`
  }
  const request = axios.post(serverUrl, config)
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
