import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryTreePosts } from '../actions'
import TreePostList from '../components/TreePostList'

const mapStateToProps = (state) => {
  return {
    treePosts: state.treePosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryTreePosts: dispatch(queryTreePosts())
  }
}


const TreePosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreePostList)

export default TreePosts
