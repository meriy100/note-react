import { combineReducers } from 'redux'

import posts from './posts'
import post from './post'
import playlist from './playlist'
import searchVideos from './searchVideos'
import currentUser from './currentUser'

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
        child_visible: !state.child_visible,
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

const currentPathList = (state = [], action) => {
  switch(action.type) {
    case "CLICK_TREE_POST":
      return action.payload.path_list
    default:
      return state
  }
}

const note = combineReducers({posts, post, treePosts, currentPathList, playlist, searchVideos, currentUser})

export default note
