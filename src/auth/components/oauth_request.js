import React from 'react'
import { requestAuth } from "../actions/index"

const OAuthRequest = (props) => {

  const authCode = requestAuth();
  return(
    <h1>
      test
    </h1>
  )
}

export default OAuthRequest