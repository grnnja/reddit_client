import React from 'react'
import { connect } from 'react-redux'
import uuid4 from 'uuid'

import { REDDIT_CLIENT_ID } from '../../constants'
import { saveRedditState } from '../actions/index'

const ROOT_URL = 'https://ssl.reddit.com/api/v1/authorize?'
const RESPONSE_TYPE = 'code'
const REDIRECT_URI = 'http://localhost:3000/auth/reddit-redir'
const DURATION = 'temporary'
const SCOPE = 'identity edit flair history mysubreddits privatemessages read report save submit subscribe vote'

const Authorization = (props) => {
  const redditState = uuid4()
  props.saveRedditState(redditState)
  return (
    <a href={`${ROOT_URL}&client_id=${REDDIT_CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${redditState}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}`}>
      Authorize
    </a>
  )
}
export default connect(null, { saveRedditState })(Authorization)
