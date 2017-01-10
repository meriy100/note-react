import { createAction } from "redux-actions";
import axios from "axios";

let nextPostId = 100

function queryPosts() {
  return axios.get(`/api/posts`).then((response) => {
    return response.data
  }).catch((response) => {
     console.log(response)
    return []
  })
}

function newPost() {
  nextPostId++
  return {id: nextPostId, body: `abc${nextPostId}`}
}

export const clickActionAddPost = createAction('ADD_POST', newPost)
export const clickActionQueryPosts = createAction('QUERY_POSTS', queryPosts)
