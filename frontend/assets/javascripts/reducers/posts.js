import { handleActions } from "redux-actions"

const posts = handleActions(
  {
    QUERY_POSTS: (state, action) => {
      return [{id: 1, body: "abc"}]
    },
    ADD_POST: (state, action) => {
      return state.concat({id: action.payload.id, body: action.payload.body})
    }
  }, []
)

export default posts
