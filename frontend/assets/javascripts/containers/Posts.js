import { connect } from 'react-redux'
import axios from "axios";

import { clickActionQueryPosts, handleClickTreePost, handleArchivePost } from '../actions'
import PostList from '../components/PostList.jsx'


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    postsPath: state.postsPath
  }
}

const queryPosts = (dispatch, params = {}) => {
  let posts = [];
  axios.get(`/api/posts`, {params}).then((response) => {
    posts = response.data
  }).catch((response) => {
     console.log(response)
    posts = []
  }).then(() => {
    dispatch(clickActionQueryPosts(posts))
  })
}


const mapDispatchToProps = (dispatch) => {
  return {
    queryPosts: (params) => queryPosts(dispatch, params),
    clickPathListItem: (id, path) => {
      dispatch(handleClickTreePost(id, path))
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
