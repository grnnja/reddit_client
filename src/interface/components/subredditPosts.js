import React from 'react'
import PostList from '../containers/postList'
import SubredditTitle from './subredditTitle'

const Subreddit = (props) => {
  const { subredditName } = props.match.params;
  return (
    <div>
      <SubredditTitle />
      <PostList subredditName={subredditName} />
    </div>
  )
}

export default Subreddit
