import { combineReducers } from 'redux'

import posts from './posts'

const treePost = (state = {}, action) => {
  switch(action.type) {
    case "CLICK_TREE_POST":
      if(state.id !== action.payload.id) {
        return Object.assign({}, state, {
          children: state.children.map(child =>
            treePost(child, action)
          )
        })
      }
      return Object.assign({}, state, {
        childVisible: !state.childVisible,
      })
    default:
      return state
  }
}

const treePosts = (state = [], action) => {
  switch(action.type) {
    case "QUERY_TREE_POSTS":
      return action.payload
    case "CLICK_TREE_POST":
      return state.map(t =>
        treePost(t, action)
      )
    default:
      return state
  }
}

const postsPath = (state = "/", action) => {
  switch(action.type) {
    case "CLICK_TREE_POST":
      return action.payload.path
    default:
      return state
  }
}

const note = combineReducers({posts, treePosts, postsPath})

export default note
