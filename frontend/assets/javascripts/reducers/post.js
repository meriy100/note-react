const postState = {
  id: null,
  pathList: [],
  name: "",
  path: "",
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
    case "EDIT_PATH":
      var splitPath = action.payload.path.split("/")
      return Object.assign({}, state, {
        path: action.payload.path,
        name: splitPath[splitPath.length - 1]
      })
    default:
      return state
  }
}

export default post
