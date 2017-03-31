import { connect } from 'react-redux'
import { handleQuerySearchVideos } from '../actions/searchVidesAction'
import { handleQueryPlaylist, handleWsQueryPlaylist } from '../actions/playlist.js'
import PlayRoomComponent from '../components/PlayRoomComponent.jsx'

const mapStateToProps = (state) => {
  return {
    searchVideos: state.searchVideos,
    playlist: state.playlist,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitQuerySearchVideos: (params) => { handleQuerySearchVideos(params)(dispatch) },
    queryPlaylist: () => { handleQueryPlaylist()(dispatch) },
    wsQueryPlaylist: (playlist) => { dispatch(handleWsQueryPlaylist(playlist)) }
  }
}

const PlayRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayRoomComponent)

export default PlayRoom

