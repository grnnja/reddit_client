import React from 'react'
import { Card, CardHeader } from '@material-ui/core';
import 
import { withRouter } from 'react-router-dom'
import './postItem.css';
import PostMedia from './postMedia'

const PostItem = (props) => {
  const redirectToPost = () => {
    const path = `/r/${props.post.subreddit}/post/${props.post.id}`
    if (props.location.pathname !== path) {
      props.history.push(path)
    }
  }
  return (
    <Card onClick={redirectToPost}>
      <CardHeader
        title={props.post.title}
        className="CardHeader"
        subheader={`${props.displaySubredditNames ? props.post.subreddit_name_prefixed : ''}Posted by:\t${props.post.author}`}
      />
      <PostMedia
        post={props.post}
      />
    </Card>
  );
};
export default withRouter(PostItem)
