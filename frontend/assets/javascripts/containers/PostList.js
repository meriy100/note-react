import { connect } from 'react-redux'
import axios from "axios";

import { clickActionQueryPosts, clickActionAddPost } from '../actions'
import Posts from '../components/Posts'


const mapStateToProps = (state) => {
  return {
    posts: state.posts
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
    clickQueryPosts: (params) => queryPosts(dispatch, params),
    clickAddPost: () => dispatch(clickActionAddPost())
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostList
