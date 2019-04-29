import React, { Component } from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import CardContent from '@material-ui/core/CardContent'

import { getPostWithComments, setCurrentPost, getComments } from '../actions/index'
import SubredditTitle from '../components/subredditTitle'
import PostItem from '../components/postItem'
import CommentList from './commentList'
import SignInBanner from '../components/signInBanner'
import '../components/horizontalCenter.css'

class PostWithComments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extended: false
    }
  }

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
    if (currentPost) {
      console.log('currentpost', currentPost)
      if (currentPost.data.id === this.props.match.params.postId) {
        return (
          <div>
            <SubredditTitle />
            <SignInBanner extended={this.state.extended} />
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
        <SubredditTitle />
        <SignInBanner extended={this.state.extended} />
        <br />
        <div className="horizontalCenter">
          <CircularProgress />
        </div>
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
