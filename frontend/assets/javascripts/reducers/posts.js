import { handleActions } from "redux-actions"

const posts = handleActions({
  CIRCLE: (state, action) => {
    return 'decide'
  },
  TRIANGLE: (state, action) => {
    return state + 't'
  },
  SQUARE: (state, action) => {
    return state + 's'
  },
  CROSS: (state, action) => {
    return state.substr(0, state.length - 1)
  }
}, 'default')

export default posts
