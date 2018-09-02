import React from "react"
import qs from 'qs'
import { connect } from 'react-redux'
import { retrieveAccessToken, clearAccessToken } from "../actions/index" 

const RetrieveAccessToken = (props) => {
  const parsedUri = qs.parse(props.location.search, { ignoreQueryPrefix: true })
  if (parsedUri.state === props.redditState) {
    setTimeout(props.clearAccessToken, 3600000)
    props.retrieveAccessToken(parsedUri.state, parsedUri.code)
    props.history.push('/r/all')
    return (
      <div>
        Retrieving Access Token...
      </div>
    )
  }
  return (
    <div>
      Error: reddit&#39;s returned state does not match the state provided
    </div>
  )
}

function mapStateToProps(state) {
  return { redditState: state.auth.redditState }
}

export default connect(mapStateToProps, { retrieveAccessToken, clearAccessToken })(RetrieveAccessToken)
