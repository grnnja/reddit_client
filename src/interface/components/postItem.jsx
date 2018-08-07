import React from 'react'
import { Card, CardHeader, CardMedia } from '@material-ui/core';
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
      {/* should stick CardMedia in return of PostMedia because PostMedia ends up
      returning text which i dont think is what CardMedia is supposed to handle */}
      <CardMedia
        overlay="Overlay subtitle"
        src={props.post.url}
      >
        <PostMedia
          post={props.post}
        />
      </CardMedia>
    </Card>
  );
};
export default withRouter(PostItem)
