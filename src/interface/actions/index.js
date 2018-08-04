import axios from 'axios'

export const POSTS = 'POSTS'
export const POST = 'POST'

const server_url =  'http://localhost:3001/forward/'

export function getPosts(subreddit, type){
  const config = {
    method: 'get',
    url: `https://www.reddit.com/r/${subreddit}/${type}/.json?limit=25`
  }
  const request = axios.post(server_url, config)
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
  const request = axios.post(server_url, config)
  return {
    type: POST,
    payload: request
  }
}