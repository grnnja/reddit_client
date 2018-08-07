import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
};

const SubredditTitle = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            r/
            {props.match.params.subredditName}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default (withRouter(withStyles(styles)(SubredditTitle)))
