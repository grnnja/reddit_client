import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPostWithComments } from '../actions/index'
import withSubredditShell from '../components/withSubredditShell'
import postItem from '../components/postItem'

class PostWithComments extends Component {
  componentDidMount() {
    this.props.getPostWithComments(this.props.match.params.subreddit_name, this.props.match.params.post_id)
  }

  render(){
    const WrappedPost = withSubredditShell(postItem)
    const { current_post } = this.props.interface
    if(current_post!==undefined) {
      return(
        <WrappedPost post={current_post.children[0].data}/>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  console.log('mapstatetoprops', state.interface.current_post)
  return {interface: state.interface}
}

export default connect(mapStateToProps, {getPostWithComments})(PostWithComments)