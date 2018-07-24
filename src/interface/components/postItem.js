import React from 'react'

const PostItem = (props) => {
  console.log('PostItemProps:\t', props)
  return(
    <div>
      <h3>Title: {props.post.data.title}</h3>
      <p>Body: {props.post.data.selftext}</p>
      <img src={props.post.data.url} alt=''/>
      
    </div>
  )
}

export default PostItem