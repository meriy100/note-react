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


export const clickActionCI = createAction('CIRCLE')
export const clickActionT = createAction('TRIANGLE')
export const clickActionS = createAction('SQUARE')
export const clickActionCR = createAction('CROSS')
