const postState = {
  id: null,
  path_list: [],
  name: "",
  path: "",
  body: "",
  summaries: [],
  user: {},
  state: -1,
}
const post = (state = postState, action) => {
  switch (action.type) {
    case "GET_POST":
      return action.payload
    case "EDIT_BODY":
      return Object.assign({}, state, {
        body: action.payload.body
      })
    case "EDIT_PATH":
      var splitPath = action.payload.path.split("/")
      return Object.assign({}, state, {
        path: action.payload.path,
        name: splitPath[splitPath.length - 1]
      })
    case "SET_NEW_POST":
      return postState
    default:
      return state
  }
}

export default post
