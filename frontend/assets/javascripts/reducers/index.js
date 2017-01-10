import { combineReducers } from 'redux'
import { handleActions } from "redux-actions"

import posts from './posts'

const tree = handleActions(
  {
    QUERY_POSTS: (state, action) => {
      return action.payload
    },
    ADD_POST: (state, action) => {
      return state.concat({id: action.payload.id, body: action.payload.body})
    }
  }, []
)

const note = post

export default note
