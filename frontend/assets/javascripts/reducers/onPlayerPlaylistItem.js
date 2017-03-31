const onPlayerPlaylistItem = (state={}, action) => {
  switch(aciton.type) {
    case 'SET_ON_PLAYER_PLAYLIST_ITEM':
      return action.payload
    default:
      return state
  }
}

export default onPlayerPlaylistItem
