import React, { Component } from 'react';
import PostList from '../containers/postList'

class Subreddit extends Component {

  render () {
    const { subreddit_name } = this.props.match.params;
    //debugger;
    return(
      <div>
        <h3>  r/{ subreddit_name }</h3>
        <PostList 
        subreddit_name={subreddit_name}/>
      </div>
    )
  }
}

export default Subreddit;