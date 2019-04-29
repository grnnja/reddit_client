import React from 'react'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Bookmark from '@material-ui/icons/Bookmark'
import BookmarkBorder from '@material-ui/icons/BookmarkBorder'
import { vote } from '../actions/index'
import './postActions.css'

const PostActions = (props) => {
  const disableOnClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
  const checkSignin = (accessToken) => {
    return true
  }
  const upvote = (e) => {
    disableOnClick(e)
    props.changeScore((props.score + ((props.likes === null) ? 1 : 2)), true)
    props.vote(props.name, 1, props.auth.accessToken, props.auth.expireTime)
  }
  const downvote = (e) => {
    props.changeScore((props.score - ((props.likes === null) ? 1 : 2)), false)
    disableOnClick(e)
    props.vote(props.name, -1, props.auth.accessToken, props.auth.expireTime)
  }
  const clearVote = (e) => {
    props.changeScore((props.score + ((props.likes === true) ? (-1) : 1)), null)
    disableOnClick(e)
    props.vote(props.name, 0, props.auth.accessToken, props.auth.expireTime)
  }
  const login = (e) => {
    disableOnClick(e)
    return false
  }
  return (
    <div className="container" onClick={props.auth.accessToken ? ()=>{} : login}>
      <IconButton className={`upvoteHover${props.archived ? ' archived' : ''}`} onClick={props.likes ? clearVote : upvote} disabled={props.archived}>
        <ArrowUpward className={props.likes ? 'upvote' : ''} />
      </IconButton>
      <Typography variant='subheading'>
        <div className={`${(props.likes !== null ) ? (props.likes ? 'upvote' : 'downvote' ) : ''}${props.archived ? ' archived' : ''}`}>
          {props.score}
        </div>
      </Typography>
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
