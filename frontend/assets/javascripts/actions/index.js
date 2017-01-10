import { createAction } from "redux-actions";

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


export const clickActionAddPost = createAction('ADD_POST')
// expect(clickActionAddPost()).to.deep.equal({
//   type: 'ADD_POST',
//   payload: {id: 2, body: "abc2"}
// });

export const clickActionQueryPosts = createAction('QUERY_POSTS')
