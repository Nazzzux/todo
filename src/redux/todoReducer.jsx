import { ADD_TODO, REPLACE_TODO } from './types';

const initialState = {
  todoList: [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload)
      }
      case REPLACE_TODO:
        return {
          ...state,
          todoList: action.payload
        }
    default:
      return state
  }
}