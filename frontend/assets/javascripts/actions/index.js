import axios from "axios";
import axiosHelper from '../lib/axiosHelper'

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

const updatePost = (post) => {
  return (dispatch) => {
    axiosHelper.patch(`/api/posts/${post.id}`, 
      { 
        post: {
        path: post.path,
        body: post.body,
      } 
    }).then((response) => {
      post = response.data
      dispatch(axiosGetPost(post))
    }).catch((response) => {
      console.log(response)
    })
  }
}

const createPost = (post) => {
  return (dispatch) => {
    axiosHelper.post(`/api/posts/`,
    {
      post: {
        path: post.path,
        body: post.body,
      } 
    }).then((response) => {
      post = response.data
      dispatch(axiosGetPost(post))
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const handleSubmitPost = (post) => {
  if(post.id) {
    return updatePost(post)  
  } else {
    return createPost(post)
  }
}

export const setNewPost = () => {
  return { type: "SET_NEW_POST", payload: { } }
}