import { POSTS, POST_AND_COMMENTS, SET_POST, COMMENTS, APPBAR_HEIGHT } from '../actions/index'

export default (state = {}, action) => {
  console.log('reducer called', action.payload)
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.payload.data.data.children }
    case POST_AND_COMMENTS:
      return { ...state, currentPost: action.payload.data[0].data.children[0], comments: action.payload.data[1].data }
    case SET_POST:
      return { ...state, currentPost: action.payload }
    case COMMENTS:
      return { ...state, comments: action.payload.data[1].data }
    case APPBAR_HEIGHT:
      return { ...state, app_bar_height: action.payload }
    default:
      return state;
  }
}

// case VOTE:
//   if (action.payload.id.startsWith('t3')) {
//     // maybe fix this so that it does not mutate state?
//     const postIndex = state.posts.findIndex((post, index) => {
//       if (post.data.name === action.payload.id) {
//         let { score, likes } = state.posts[index].data
//         switch (action.payload.direction) {
//           case 1:
//             if (likes === null) {
//               score += 1
//             } else if (likes === true) {
//               score -= 1
//             } else if (likes === false) {
//               score += 2
//             }
//             likes = true
//             break;
//           case 0:
//             if (likes === false) {
//               score += 1
//             } else if (likes === true) {
//               score -= 1
//             }
//             likes = null
//             break;
//           case -1:
//             if (likes === null) {
//               score -= 1
//             } else if (likes === false) {
//               score += 1
//             } else if (likes === true) {
//               score -= 2
//             }
//             likes = false
//             break;
//           default:
//             break;
//         }
//         state.posts[index].data.likes = likes
//         state.posts[index].data.score = score
//         return true
//       }
//       return false
//     })
//     return { ...state }
//   }
//   if (action.payload.id.startsWith('t1')) {
//     return { ...state }
//   }
//   console.log('vote', action.payload)
//   return { ...state, }
