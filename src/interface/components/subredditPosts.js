import React from 'react'
import PostList from '../containers/postList'
import withSubredditShell from './withSubredditShell'

const Subreddit = (props) => {
  const { subreddit_name } = props.match.params;
  const WrappedPostList = withSubredditShell(PostList)
  return(
    <WrappedPostList subreddit_name={subreddit_name} />
  )
}

export default Subreddit;