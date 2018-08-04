import React, {Component} from 'react';
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

const withSubredditShell = (Content) => {
  class WrappedComponent extends Component{
    render() {
    const { classes } = this.props
      return(
        <div className={classes.root}>
          <AppBar position='static' color='default'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                r/{this.props.match.params.subreddit_name}
              </Typography>
            </Toolbar>
          </AppBar>
          <Content {...this.props} />
        </div>
      )
    }
  }
  return(withRouter(withStyles(styles)(WrappedComponent)))
}

export default withSubredditShell