import { connect } from 'react-redux'
import axios from "axios";

import { clickActionQueryPosts, clickActionAddPost } from '../actions'
import Posts from '../components/Posts'


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const queryPosts = (dispatch) => {
  let posts = [];
  axios.get(`/api/posts`).then((response) => {
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
    clickQueryPosts: () => queryPosts(dispatch),
    clickAddPost: () => dispatch(clickActionAddPost())
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostList
