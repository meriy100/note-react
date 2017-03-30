import { combineReducers } from 'redux'

const playlist = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PLAYLIST_ITEM':
      return [
        ...state,
        action.payload
      ]
    case 'QUERY_PLAYLIST':
      return action.payload
    case 'REMOVE_PLAYLIST':
      return state.filter((playlist_item, _) => playlist_item.id !== action.payload.id)
    default:
      return state
  }
}

export default playlist
