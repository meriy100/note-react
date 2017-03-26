const postState = {
  id: null,
  body: "",
  name: "",
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
    case 'ARCHIVE_POST':
      return state.filter((post, _) => post.id !== action.payload.id);
    default:
      return state
  }
}
export default  posts
