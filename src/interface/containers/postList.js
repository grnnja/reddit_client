import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import { getPosts } from '../actions/index'
import PostItem from '../components/postItem'

class PostList extends Component {

  componentDidMount() {
    let { sortType } = this.props.match.params
    sortType = sortType || 'hot'
    this.props.getPosts(this.props.subredditName, sortType)
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
  return { interface: state.interface }
}

export default withRouter(connect(mapStateToProps, { getPosts })(PostList))
