import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getComments } from '../actions/index'
import CommentItem from '../components/commentItem'

class CommentList extends Component {
  componentDidMount() {
    const { postId, subredditName } = this.props.match.params
    const { comments } = this.props.interface
    if (!comments
      || (comments.children.length === 0)
      || (postId !== comments.children[0].data.link_id.slice(3, 9))) {
      this.props.getComments(subredditName, postId)
    }
  }

  render() {
    const { comments } = this.props.interface
    const { postId } = this.props.match.params
    if (comments) {
      if (comments.children.length === 0) {
        return (
          <div>
            no comments
          </div>
        )
      }
      if (postId === comments.children[0].data.link_id.slice(3, 9)) {
        return (
          <div>
            <CommentItem />
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
  console.log('CommentList state.interface', state.interface)
  return { interface: state.interface }
}

export default withRouter(connect(mapStateToProps, { getComments })(CommentList))
