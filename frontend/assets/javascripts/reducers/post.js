const postState = {
  id: null,
  pathList: [],
  name: "",
  user: {},
}
const post = (state = postState, action) => {
  switch (action.type) {
    case "GET_POST":
      return action.payload
    default:
      return state
  }
}

export default post
