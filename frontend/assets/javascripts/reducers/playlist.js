import { combineReducers } from 'redux'

const playlist = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PLAYLIST':
      return [
        ...state,
        action.payload
      ]
    case 'QUERY_PLAYLIST':
      return action.payload
    case 'REMOVE_PLAYLIST':
      return state.filter((video, _) => video.videoId !== action.playload.video_id)
    default:
      return state
  }
}

export default playlist
