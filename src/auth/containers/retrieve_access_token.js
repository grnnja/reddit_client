import React from "react"
import qs from 'qs'
import {connect} from 'react-redux'
import { retrieveAccessToken } from "../actions/index" 

const RetrieveAccessToken = (props) => {
  
  const parsed_uri = qs.parse(props.location.search, { ignoreQueryPrefix: true })
  if(parsed_uri.state===props.redditState){
    props.retrieveAccessToken(parsed_uri.state, parsed_uri.code, (response) => {
      console.log("response:", response)
      this.props.history.push('/')
    });
    return(
      <div>Retrieving Access Token...</div>
    )
  } else {
    return(
      <div>Error: the returned state does not match the state provided</div>
    )
  }
}


function mapStateToProps(state){
  return { redditState: state.auth.redditState }
}

export default connect(mapStateToProps, { retrieveAccessToken })(RetrieveAccessToken)