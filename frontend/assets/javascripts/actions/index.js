import axios from "axios";
import axiosHelper from '../lib/axiosHelper'

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

export const handleClickTreePost = (id, path_list) => {
  return { type: 'CLICK_TREE_POST', payload: { id, path_list } }
}

export const handleEditBody = (body) => {
  return { type: "EDIT_BODY", payload: { body } }
}

export const handleEditPath = (path) => {
  return { type: "EDIT_PATH", payload: { path } }
}

const updatePost = (post) => {
  return (dispatch) => {
    return axiosHelper.patch(`/api/posts/${post.id}`,
      {
        post: {
          path: post.path,
          body: post.body,
        }
      }
    ).then((response) => {
      post = response.data
      dispatch(axiosGetPost(post))
    }).catch((response) => {
      console.log(response)
    })
  }
}

const archivePost = (id) => {
  return { type: 'ARCHIVE_POST', payload: { id: id } }
}

export const handleArchivePost = (id) => {
  return (dispatch) => {
    return axiosHelper.patch(`/api/posts/${id}/state`, {
      state: 'archive'
    }).then((response) => {
      dispatch(archivePost(response.data.id))
    }).catch((response) => {
      console.log(response)
    })
  }
}


const createPost = (post) => {
  return (dispatch) => {
    return axiosHelper.post(`/api/posts/`,
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

export const setNewPost = (path) => {
  return { type: "SET_NEW_POST", payload: { path } }
}
