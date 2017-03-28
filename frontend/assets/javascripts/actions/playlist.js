import axiosHelper from '../lib/axiosHelper'

export const handleAddPlaylist = (video) => {
  return { type: 'ADD_PLAYLIST', payload: video }
}

