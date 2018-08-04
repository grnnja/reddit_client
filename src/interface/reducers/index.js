import { POSTS, POST } from '../actions/index'

export default (state = {}, action) => {
  
  switch(action.type) {
    case POSTS:
      return {...state, posts: action.payload.data.data.children}
    case POST:
      console.log('POST case\t', action.payload)
      console.log('current_comments', action.payload.data[0].data)
      return {...state, current_post: action.payload.data[0].data, current_comments: action.payload.data[1].data}
    default:
      return state;
  }
}