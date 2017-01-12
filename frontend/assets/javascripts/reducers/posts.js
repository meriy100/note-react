const postState = {
  id: null,
  body: ""
}

const post = (state = {}, action) => {
  switch (action.type) {
    case "ADD_POST":
      return { id: action.payload.id, body: action.payload.body }
    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch(action.type) {
    case 'QUERY_POSTS':
      return action.payload
    case 'ADD_POST':
      console.log(state.posts)
      return state.concat(post(undefined, action))
    default:
      return state
  }
}
export default  posts
