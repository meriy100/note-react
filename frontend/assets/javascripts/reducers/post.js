const postState = {
  id: null,
  pathList: [],
  name: "",
  body: "",
  summaries: [],
  user: {},
}
const post = (state = postState, action) => {
  switch (action.type) {
    case "GET_POST":
      return action.payload
    case "EDIT_BODY":
      return Object.assign({}, state, {
        body: action.payload.body
      })
    case "EDIT_NAME":
      return Object.assign({}, state, {
        name: action.payload.name
      })
    default:
      return state
  }
}

export default post
