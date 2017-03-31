import axiosHelper from '../lib/axiosHelper'

const setCurrentUser = (currentUser) => {
  return { type: 'SET_CURRENT_USER', payload: currentUser }
}

export const handleSetCurrentUser = () => {
  return (dispatch) => {
    return axiosHelper.get('/api/current_user').then((response) => {
      dispatch(setCurrentUser(response.data))
    }).catch((response) => {
      console.log(response)
    })
  }
}

