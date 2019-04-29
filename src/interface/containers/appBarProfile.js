import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'
import { clearAccessToken } from '../../auth/actions/index.js'
import { withRouter } from 'react-router-dom'

class AppBarProfile extends Component {
  render(){
    console.log("appbarprofile props", this.props)
    if (this.props.auth.accessToken!==undefined) {
      return (
        <Button color="inherit" variant="outlined" onClick={this.props.clearAccessToken}>  
          Logout
        </Button>
      )
    }
    return (
      <Button variant="outlined" color="inherit" onClick={() => this.props.history.push('/auth')}>
        Login
      </Button>
    )
  }
}

function mapStateToProps(state) {
  console.log("logout/in button state", state.auth)
  return {
    auth: state.auth
  }
}
export default withRouter(connect(mapStateToProps, {clearAccessToken})(AppBarProfile))