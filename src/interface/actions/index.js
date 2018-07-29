import axios from 'axios'

export const POSTS = 'POSTS'

const server_url =  'http://localhost:3001/forward/'

export function getPosts(subreddit, type, callback=()=>{}){
  const config = {
    method: 'get',
    url: `https://www.reddit.com/r/${subreddit}/${type}/.json?limit=25`
  }
  const request = axios.post(server_url, config)
  // .then((response) => {
  //   console.log(response.data)
  //   callback(response.data)
  // })
  console.log("getPosts")
  return {
    type: POSTS,
    payload: request
  }
}