import { combineReducers } from 'redux'

import posts from './posts'

// const tree = handleActions(
//   {
//     QUERY_POSTS: (state, action) => {
//       return action.payload
//     },
//     ADD_POST: (state, action) => {
//       return state.concat({id: action.payload.id, body: action.payload.body})
//     }
//   }, []
// )

const note = posts

export default note
