import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import { withRouter } from 'react-router-dom'
import PostActions from './postActions'
import './postItem.css';
import PostMedia from './postMedia'

class PostItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transition: false,
      top: 0,
      left: 0,
      width: 0,
      score: this.props.post.score,
      likes: this.props.post.likes
    }
    this.setAnimationVariables = this.setAnimationVariables.bind(this)
  }

  setAnimationVariables() {
    if (this.state.transition) {
      return {
        '--top': this.state.top + 'px',
        '--left': this.state.left + 'px',
        '--width': this.state.width + 'px'
      }
    }
    return null
  }

  redirectToPost = () => {
    const path = `/r/${this.props.post.subreddit}/post/${this.props.post.id}`
    if (this.props.location.pathname !== path) {
      this.elem = window.document.getElementById(this.props.post.id)
      this.rect = this.elem.getBoundingClientRect()
      this.setState({
        transition: true,
        top: this.rect.y,
        left: this.rect.x,
        width: this.rect.width
      })
      setTimeout(() => this.props.history.push(path), 300)
    }
  }

  render() {
    console.log('postItem props', this.props.post)
    return (
      <Card
        id={this.props.post.id}
        onClick={this.redirectToPost}
        className={`card${this.state.transition ? ' singlePost' : ''}`}
        style={this.setAnimationVariables()}
      >
        <CardHeader
          title={this.props.post.title}
          className="CardHeader"
          subheader={`${this.props.displaySubredditNames ? this.props.post.subreddit_name_prefixed : ''}\tPosted by:\t${this.props.post.author}`}
        />
        <PostMedia
          post={this.props.post}
        />
        <CardActions disableActionSpacing>
          <PostActions
            {...this.props.post}
            score={this.state.score}
            likes={this.state.likes}
            changeScore={(newScore, direction) => {
              this.setState({ score: newScore, likes: direction })
            }}
          />
        </CardActions>
      </Card>
    );
  }
}

export default withRouter(PostItem)
