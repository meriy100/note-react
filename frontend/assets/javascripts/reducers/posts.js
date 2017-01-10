const post = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        id: action.id,
        text: action.text,
      }
    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        post(undefined, action)
      ]
    case 'GET_POSTS':
      return state.map(p =>
        post(p, action)
      )
    default:
      return state
  }
}

export default posts
