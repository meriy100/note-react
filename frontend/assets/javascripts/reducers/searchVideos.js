import { combineReducers } from 'redux'

const searchVideos = (state=[], action) => {
  switch(action.type) {
    case 'QUERY_SEARCH_VIDEOS':
      return action.payload
    default:
      return state
  }
}

export default searchVideos

