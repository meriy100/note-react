const initialState = {
  posts: []
};

const posts = (state = initialState, action) => {
  switch(action.type) {
    case 'QUERY_POSTS':
      return { posts: action.payload }
    case 'ADD_POST':
      console.log(state.posts)
      return { posts: state.posts.concat({id: action.payload.id, body: action.payload.body}) }
    default:
      return state
  }
}
export default  posts
