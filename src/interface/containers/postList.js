import React, { Component} from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getPosts } from '../actions/index'
import PostItem from '../components/postItem'

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.subreddit_name, 'hot')
  }

  renderPosts() {

    return _.map(this.props.posts, post => {
      return(
        <li key={post.data.id}>
          <PostItem
            post={post} />
        </li>
      )
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  //   return false
  // }

  render() {
    // let {posts} = this.props.interface
        console.log('this.props.posts', this.props)
    return(
      <ul>
        {this.renderPosts()}
      </ul>
      
    )
  }
}

function mapStateToProps(state) {
  return {interface: state.interface}
}

export default connect(mapStateToProps, { getPosts })(PostList)
