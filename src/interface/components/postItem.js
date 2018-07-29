import React from 'react'
import {Card, CardHeader, CardMedia} from '@material-ui/core';
import './postItem.css'
import PostMedia from './postMedia'

const PostItem = (props) => {
  console.log('PostItemProps:\t', props)
  return(
    <Card>
      <CardHeader
        title={props.post.title}
        subheader={`${props.display_subreddit_names?props.post.subreddit_name_prefixed:''}\nPosted by:\t${props.post.author}`}
      />
      <CardMedia
        overlay="Overlay subtitle" 
        src={props.post.url}
        children={<PostMedia 
          post={props.post}
        />}
       >

      </CardMedia>
    </Card>
  )
}
//{props.display_subreddit_names?props.post.subreddit_name_prefixed:''}
export default PostItem