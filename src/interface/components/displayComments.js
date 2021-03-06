import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import CommentItem from './commentItem'
import './displayComments.css'

const styles = {
  cardContent: {
    paddingRight: 8,
    paddingLeft: 16,
    paddingBottom: '0 !important'
  }
}

const DisplayComments = (props) => {
  const { classes } = props
  console.log('DisplayComments props', classes)
  return (props.comments.map((comment) => {
    if ((comment.kind !== 'more') && (comment.data.replies.data)) {
      console.log('comment.data', comment.data)
      return (
        <div key={comment.data.id}>
          <Card>
            <CardContent classes={{ root: classes.cardContent }}>
              <CommentItem comment={comment} />
              <DisplayComments comments={comment.data.replies.data.children} classes={classes} />
            </CardContent>
          </Card>
        </div>
      )
    }
    return (
      <div>
        <Card key={comment.data.id}>
          <CardContent className={classes.cardContent}>
            <CommentItem comment={comment} />
          </CardContent>
        </Card>
        <br />
      </div>
    )
  }))
}

export default withStyles(styles)(DisplayComments)
