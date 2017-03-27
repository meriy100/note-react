import { connect } from 'react-redux'
import { handleQuerySearchVideos } from '../actions/searchVidesAction'
import PlayRoomComponent from '../components/PlayRoomComponent.jsx'

const mapStateToProps = (state) => {
  return {
    searchVideos: state.searchVideos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitQuerySearchVideos: (params) => { handleQuerySearchVideos(params)(dispatch) },
  }
}

const PlayRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayRoomComponent)

export default PlayRoom

