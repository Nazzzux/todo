import { LOGIN_NAME, ADD_TODO, REPLACE_TODO } from "./types";

export function loginName(name) {
  return {
    type: LOGIN_NAME, 
    payload: name
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export function replaceTodo(todo) {
  return {
    type: REPLACE_TODO,
    payload: todo
  }
}