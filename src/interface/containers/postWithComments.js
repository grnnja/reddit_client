import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { getPostWithComments, setCurrentPost, getComments } from '../actions/index'
import SubredditTitle from '../components/subredditTitle'
import PostItem from '../components/postItem'
import CommentList from './commentList'

class PostWithComments extends Component {
  componentDidMount() {
    const { posts } = this.props.interface
    const currentPost = posts && posts.find(post => post.data.id === this.props.match.params.postId)
    if (currentPost) {
      this.props.setCurrentPost(currentPost)
    } else {
      this.props.getPostWithComments(this.props.match.params.subredditName,
        this.props.match.params.postId)
    }
  }

  render() {
    const { currentPost } = this.props.interface
    // let returnHTML = '<div><SubredditTitle />'
    if (currentPost) {
      console.log('currentpost', currentPost)
      if (currentPost.data.id === this.props.match.params.postId) {
        return (
          <div>
            <SubredditTitle />
            <PostItem post={currentPost.data} />
            <CardContent>
              <CommentList />
            </CardContent>
          </div>
        )
      }
    }
    return (
      <div>
        Loading...
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('mapstatetoprops', state.interface.currentPost)
  return { interface: state.interface }
}

export default connect(mapStateToProps,
  { getPostWithComments, setCurrentPost, getComments })(PostWithComments)
