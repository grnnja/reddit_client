import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
// import { setAppBarHeight } from '../actions/index'

import './subredditTitle.css'
import AppBarProfile from '../containers/appBarProfile'

const styles = {
  root: {
    flexGrow: 1,
  },
};

const SubredditTitle = (props) => {
  // componentDidUpdate() {
  //   console.log('componentdidUpdate')
  //   this.elem = window.document.getElementById(this.props.subredditName)
  //   this.rect = this.elem.getBoundingClientRect()
  //   this.setAppBarHeight(this.rect.y)
  // }
  // id={subredditName}
  const { classes } = props
  const { subredditName } = props.match.params
  return (
    <div className={`${classes.root} subredditTitle`}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" className='grow'>
            r/
            {subredditName}
          </Typography>
          <AppBarProfile />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default (withRouter(withStyles(styles)(SubredditTitle)))
