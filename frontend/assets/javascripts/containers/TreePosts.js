import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { handleQueryTreePosts, handleToggleVisibleTreePost } from '../actions'
import TreePostList from '../components/TreePostList'

const mapStateToProps = (state) => {
  return {
    treePosts: state.treePosts
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
    toggleVisibleTreePost: (id) => {
      dispatch(handleToggleVisibleTreePost(id))
    },
  }
}


const TreePosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreePostList)

export default TreePosts
