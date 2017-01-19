import axios from "axios";

let nextPostId = 100

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

export const handleQueryTreePosts = (treePosts) => {
  return { type: 'QUERY_TREE_POSTS', payload: treePosts }
}
