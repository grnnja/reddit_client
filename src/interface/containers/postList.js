import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { getPosts } from '../actions/index'
import PostItem from '../components/postItem'

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.subreddit_name, 'hot')
  }

  renderPosts() {
    return _.map(this.props.interface.posts, post => {
      return(
        <Grid
          item={true}
          xs={12}
          sm={8}
          key={post.data.id}
          children={<PostItem
            display_subreddit_names={(this.props.subreddit_name==='all')?true:false}
            post={post.data} />} >
        </Grid>

      )
    })
  }

  render() {
    console.log('this.props.posts', this.props)
    return(
      <div style={{ padding: 8 }}>
          <Grid
            container={true}
            direction='column'
            justify='flex-start'
            spacing={16}
            alignItems='center'
            alignContent='stretch'>
            {this.renderPosts()}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {interface: state.interface}
}

export default connect(mapStateToProps, { getPosts })(PostList)
