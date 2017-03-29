import axiosHelper from '../lib/axiosHelper'

export const handleAddPlaylist = (playlist_item) => {
  return { type: 'ADD_PLAYLIST_ITEM', payload: playlist_item }
}

const queryPlaylist = (playlist) => {
  return { type: 'QUERY_PLAYLIST', payload: playlist }
}

export const handleQueryPlaylist = () => {
  return (dispatch) => {
    return axiosHelper.get('/api/playlist_items').then((response) => {
      dispatch(queryPlaylist(response.data))
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const handleRemovePlaylist = (playlist_item) => {
  return { type: 'REMOVE_PLAYLIST', payload: playlist_item }
}
