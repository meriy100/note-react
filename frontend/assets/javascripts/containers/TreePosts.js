import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { clickActionQueryPosts, handleQueryTreePosts, handleClickTreePost } from '../actions'
import TreePostList from '../components/TreePostList'

const mapStateToProps = (state) => {
  return {
    treePosts: state.treePosts,
    postsPath: state.postsPath
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

const queryPosts = (dispatch, params = {}) => {
  let posts = [];
  axios.get(`/api/posts`, {params: params}).then((response) => {
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
    queryTreePosts: queryTreePosts(dispatch),
    queryPosts: (params) => queryPosts(dispatch, params),
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
