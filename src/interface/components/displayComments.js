import React from 'react'
import CommentItem from './commentItem'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import './displayComments.css'

const DisplayComments = (props) => {
  console.log('DisplayComments props', props)
  return (props.comments.map((comment) => {
    if ((comment.kind !== 'more') && (comment.data.replies.data)) {
      console.log('comment.data', comment.data)
      return (
        <Card>
          <CardContent>
            <div>
              <CommentItem comment={comment} />
              <DisplayComments comments={comment.data.replies.data.children} />
            </div>
          </CardContent>
        </Card>
      )
    }
    return (
      <div clasName="displayComments">
        <CommentItem comment={comment} />
      </div>
    )
  }))
}

export default DisplayComments
