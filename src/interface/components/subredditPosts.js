import React, { Component } from 'react'
import PostList from '../containers/postList'
import SubredditTitle from './subredditTitle'
import SignInBanner from './signInBanner'

class Subreddit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extended: false
    }
  }

  render() {
    const { subredditName } = this.props.match.params;
    return (
      <div>
        <SubredditTitle />
        <SignInBanner extended={this.state.extended} />
        <PostList subredditName={subredditName} />
      </div>
    )
  }
}

export default Subreddit
