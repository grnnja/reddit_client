import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import './commentItem.css'

const CommentItem = (props) => {
  console.log('commentItem props', props)
  if (props.comment.data.id === 'more') {
    return (
      <div className="commentItem">
        <Typography variant="display4">
          {props.comment.data.id}
        </Typography>
      </div>
    )
  }
  return (
    <div>
      <Typography variant="caption">
        {props.comment.data.author}
      </Typography>
      <Typography>
        {props.comment.data.body}
      </Typography>
    </div>
  )
}

export default CommentItem
