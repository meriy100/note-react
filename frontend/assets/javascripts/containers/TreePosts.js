import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { handleQueryTreePosts, handleClickTreePost } from '../actions'
import TreePostList from '../components/TreePostList'

const mapStateToProps = (state) => {
  return {
    treePosts: state.treePosts,
    postsPath: state.rootPostsPath
  }
}

const queryTreePosts = (dispatch) => {
  let treePosts = [];
  axios.get(`/api/tree_posts`).then((response) => {
    treePosts = response.data
  }).catch((response) => {
     console.log(response)
    treePosts = []
  }).then(() => {
    dispatch(handleQueryTreePosts(treePosts))
  })
}


const mapDispatchToProps = (dispatch) => {
  return {
    queryTreePosts: queryTreePosts(dispatch),
    clickTreePost: (id) => {
      dispatch(handleClickTreePost(id))
    },
  }
}


const TreePosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreePostList)

export default TreePosts
