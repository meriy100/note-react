import axiosHelper from '../lib/axiosHelper'

const queryPosts = (posts) => {
  return { type: 'QUERY_POSTS', payload: posts }
}

export const handleQueryPosts = (params = {}) => {
  return (dispatch) => {
    return axiosHelper.get(`/api/posts`, {params}).then((response) => {
      dispatch(queryPosts(response.data))
    }).catch((response) => {
       console.log(response)
      posts = []
    })
  }
}

