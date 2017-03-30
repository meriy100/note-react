import { connect } from 'react-redux'
import axios from "axios";

import { handleClickTreePost, handleArchivePost } from '../actions'
import { handleQueryPosts } from '../actions/posts'
import PostList from '../components/PostList.jsx'


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentPathList: state.currentPathList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryPosts: (params) => {
      handleQueryPosts(params)(dispatch)
    },
    clickPathListItem: (id, path_list) => {
      dispatch(handleClickTreePost(id, path_list))
    },
    clickArchivePost: (id) => {
      handleArchivePost(id)(dispatch)
    },
  }
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

export default Posts
