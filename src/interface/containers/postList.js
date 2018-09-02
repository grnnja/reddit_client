import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getPosts } from '../actions/index'
import PostItem from '../components/postItem'
import '../components/horizontalCenter.css'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = { sortType: this.props.match.params.sortType || 'hot' }
  }

  componentDidMount() {
    this.props.getPosts(this.props.subredditName, this.state.sortType, this.props.auth.accessToken)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.accessToken !== this.props.auth.accessToken) {
      this.props.getPosts(this.props.subredditName, this.state.sortType, this.props.auth.accessToken)
    }
  }

  renderPosts() {
    return _.map(this.props.interface.posts, (post) => {
      return (
        <Grid
          item
          xs={12}
          sm={8}
          key={post.data.id}
        >
          <PostItem
            displaySubredditNames={this.props.subredditName === 'all'}
            post={post.data}
          />
        </Grid>

      )
    })
  }

  render() {
    if (!this.props.interface.posts) {
      return (
        <div>
          <br />
          <div className="horizontalCenter">
            <CircularProgress />
          </div>
        </div>
      )
    }
    return (
      <div style={{ padding: 8 }}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          spacing={16}
          alignItems="center"
          alignContent="stretch"
        >
          {this.renderPosts()}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('mapstatetoprops', state.auth.accessToken)
  return {
    interface: state.interface,
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps, { getPosts })(PostList))
