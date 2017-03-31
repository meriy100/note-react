import axiosHelper from '../lib/axiosHelper'

const querySearchVideos = (searchVideos) => {
  return { type: 'QUERY_SEARCH_VIDEOS', payload: searchVideos }
}

const searchVideoParams = (q) => {
  return {
    part: 'snippet',
    q: q,
    key: process.env.YOUTUBE_KEY,
    type: 'video',
    maxResults: 30,
  }
}

export const handleQuerySearchVideos = (q) => {
  return (dispatch) => {
    return axiosHelper.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: searchVideoParams(q)
    }).then((response)=> {
      console.log(response.data.items)
      dispatch(querySearchVideos(response.data.items))
    }).catch((response) => {
      console.log(response)
      console.log('ご不便')
    })
  }
}
