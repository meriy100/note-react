import axios from "axios";
import axiosHelper from '../lib/axiosHelper'

let nextPostId = 100

function newPost() {
  nextPostId++
  return {id: nextPostId, body: `abc${nextPostId}`}
}

export const clickActionQueryPosts = (posts) => {
  return { type: 'QUERY_POSTS', payload: posts }
}

const axiosGetPost = (post) => {
  return { type: "GET_POST", payload: post}
}

export const handleGetPost = (postId) => {
  let post = {}
  return (dispatch) => {
    axios.get(`/api/posts/${postId}`).then((response) => {
      post = response.data
    }).catch((response) => {
       console.log(response)
      post = {}
    }).then(() => {
      dispatch(axiosGetPost(post))
    })
  }
}

export const handleQueryTreePosts = (treePosts) => {
  return { type: 'QUERY_TREE_POSTS', payload: treePosts }
}

export const handleClickTreePost = (id, path) => {
  return { type: 'CLICK_TREE_POST', payload: { id, path } }
}

export const handleEditBody = (body) => {
  return { type: "EDIT_BODY", payload: { body } }
}

export const handleEditPath = (path) => {
  return { type: "EDIT_PATH", payload: { path } }
}

export const handleSubmitPost = (post) => {
  return (dispatch) => {
    axiosHelper.patch(`/api/posts/${post.id}`, 
      { post: post }
    ).then((response) => {
      post = response.data
      dispatch(axiosGetPost(post))
    }).catch((response) => {
      console.log(response)
    })
  }
}