import axiosHelper from '../lib/axiosHelper'

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

export const handleWsQueryPlaylist = (playlist) => {
  return { type: 'QUERY_PLAYLIST', payload: playlist }
}
