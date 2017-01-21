const postState = {
  id: null,
  body: ""
}

const post = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch(action.type) {
    case 'QUERY_POSTS':
      return action.payload
    default:
      return state
  }
}
export default  posts
