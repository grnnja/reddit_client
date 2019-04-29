import React from 'react'
import Card from '@material-ui/core/Card'

const SignInBanner = (props) => {
  if (props.extended) {
    return (
      <Card>
        1234
      </Card>
    )
  }
  return (
    <div />
  )
}

export default SignInBanner
