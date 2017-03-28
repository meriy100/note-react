import { connect } from 'react-redux'
import { handleQuerySearchVideos } from '../actions/searchVidesAction'
import { handleAddPlaylist } from '../actions/playlist.js'
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
    clickAddPlayList: (video) => { dispatch(handleAddPlaylist(video)) }
  }
}

const PlayRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayRoomComponent)

export default PlayRoom

