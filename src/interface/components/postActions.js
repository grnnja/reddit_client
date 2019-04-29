import React from 'react'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Bookmark from '@material-ui/icons/Bookmark'
import BookmarkBorder from '@material-ui/icons/BookmarkBorder'
import { vote } from '../actions/index'
import './postActions.css'

const PostActions = (props) => {
  const disableOnClick = (e) => {
    //e.preventDefault()
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
  const upvote = (e) => {
    disableOnClick(e)
    props.vote(props.name, 1, props.auth.accessToken)
  }
  const downvote = (e) => {
    disableOnClick(e)
    props.vote(props.name, -1, props.auth.accessToken)
  }
  const clearVote = (e) => {
    disableOnClick(e)
    props.vote(props.name, 0, props.auth.accessToken)
  }

  return (
    <div className="container" onclick={(e) => disableOnClick(e)}>
      <IconButton className={`upvoteHover${props.archived ? ' archived' : ''}`} onClick={props.likes ? clearVote : upvote} disabled={props.archived}>
        <ArrowUpward className={props.likes ? 'upvote' : ''} />
      </IconButton>
      <div className={`${(props.likes !== null ) ? (props.likes ? 'upvote' : 'downvote' ) : ''}${props.archived ? ' archived' : ''}`}>
        {props.score}
      </div>
      <IconButton className={`downvoteHover${props.archived ? ' archived' : ''}`} onClick={(props.likes === false) ? clearVote : downvote} disabled={props.archived}>
        <ArrowDownward className={(props.likes === false) ? 'downvote' : ''} />
      </IconButton>
      <IconButton>
        <Bookmark />
        <BookmarkBorder />
      </IconButton>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { vote })(PostActions)
