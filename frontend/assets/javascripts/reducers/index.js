import { combineReducers } from 'redux'

import posts from './posts'


const treePosts = (state = [], action) => {
  switch(action.type) {
    case "QUERY_TREE_POSTS":
      return action.payload
    default:
      return state
  }
}

const note = combineReducers({posts, treePosts})

export default note
