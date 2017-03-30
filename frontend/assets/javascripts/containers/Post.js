import { connect } from 'react-redux'
import axios from "axios";

import { handleClickTreePost, handleGetPost, handleArchivePost } from '../actions'
import { handleQueryPosts } from '../actions/posts'
import PostComponent from '../components/PostComponent.jsx'


const mapStateToProps = (state) => {
  return {
    post: state.post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => { handleGetPost(id)(dispatch) },
    queryPosts: (params) => { handleQueryPosts(params)(dispatch) },
    clickPathListItem: (id, path_list) => {
      dispatch(handleClickTreePost(id, path_list))
    },
    clickArchivePost: (id) => {
      handleArchivePost(id)(dispatch)
    },
  }
}

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent)

export default Post
