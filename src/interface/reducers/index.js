import { POSTS, POST_AND_COMMENTS, SET_POST, COMMENTS } from '../actions/index'

export default (state = {}, action) => {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.payload.data.data.children }
    case POST_AND_COMMENTS:
      return { ...state, currentPost: action.payload.data[0].data.children[0], comments: action.payload.data[1].data }
    case SET_POST:
      return { ...state, currentPost: action.payload }
    case COMMENTS:
      return { ...state, comments: action.payload.data[1].data }
    default:
      return state;
  }
}
