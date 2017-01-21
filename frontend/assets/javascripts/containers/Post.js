import { connect } from 'react-redux'
import axios from "axios";

import { handleGetPost } from '../actions'
import PostComponent from '../components/PostComponent.jsx'


const mapStateToProps = (state) => {
  return {
    post: state.post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => { handleGetPost(id)(dispatch) },
  }
}

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent)

export default Post
