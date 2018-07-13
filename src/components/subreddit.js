import React, { Component } from 'react';

class Subreddit extends Component {

  render () {
    const { subreddit_name } = this.props.match.params;
    return(
      <div>subreddit name: { subreddit_name }</div>
    );
  }
}

export default Subreddit;