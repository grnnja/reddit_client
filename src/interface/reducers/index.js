import { POSTS } from '../actions/index'

export default (state = {}, action) => {
  
  switch(action.type) {
    case POSTS:
      return {...state, posts: action.payload.data.data.children}
    default:
      return state;
  }
}