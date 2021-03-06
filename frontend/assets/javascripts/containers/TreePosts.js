import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { handleQueryTreePosts, handleClickTreePost } from '../actions'
import { handleQueryPosts } from '../actions/posts'
import TreePostList from '../components/TreePostList'

const mapStateToProps = (state) => {
  return {
    treePosts: state.treePosts,
    currentPathList: state.currentPathList
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
    queryPosts: (params) => { handleQueryPosts(params)(dispatch) },
    clickTreePost: (id, path) => {
      dispatch(handleClickTreePost(id, path))
    },
  }
}


const TreePosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreePostList)

export default TreePosts
