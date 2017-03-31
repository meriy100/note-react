import { connect } from 'react-redux'
import { handleQuerySearchVideos } from '../actions/searchVidesAction'
import { handleAddPlaylist, handleQueryPlaylist, handleRemovePlaylist } from '../actions/playlist.js'
import PlayRoomComponent from '../components/PlayRoomComponent.jsx'

const mapStateToProps = (state) => {
  return {
    searchVideos: state.searchVideos,
    playlist: state.playlist,
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitQuerySearchVideos: (params) => { handleQuerySearchVideos(params)(dispatch) },
    clickAddPlayList: (playlist_item) => { dispatch(handleAddPlaylist(playlist_item)) },
    queryPlaylist: () => { handleQueryPlaylist()(dispatch) },
    removePlaylist: (playlist_item) => { dispatch(handleRemovePlaylist(playlist_item)) }
  }
}

const PlayRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayRoomComponent)

export default PlayRoom

