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

export const clickActionQueryPosts = (posts) => {
  return { type: 'QUERY_POSTS', payload: posts }
}

export const clickActionAddPost = () => {
  return { type: 'ADD_POST', payload: newPost() }
}
