import React, { useState } from 'react'
import Input from '../Input/Input'
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from '../../redux/types';
import { addTodo, replaceTodo } from '../../redux/actions';

export default function TodoItem(props) {
  const [isDone, setIsDone] = useState(props.isDone)
  const dispatch = useDispatch()
  const store = useSelector(state => state.todo.todoList)

  const [updatedTodo, setUpdatedTodo] = useState()

  const inputChangeHandler = (event) => {
    setIsDone(!isDone)
    
    setUpdatedTodo(store.map(item => {
      if (item.id === event.target.id) {
        return {
          ...item,
          isDone: !isDone
        }
      } else {
        return item
      }
    }))  

    dispatch(replaceTodo(updatedTodo))
  }


  return (
    <>
    <p>{JSON.stringify(updatedTodo)}</p>
    <label className='TodoItem'>
      <Input 
        type='checkbox'
        id={props.id}
        checked={isDone}
        inputChangeHandler={inputChangeHandler}        
      />
      {props.title} ----  
      {JSON.stringify(isDone)}
    </label>
    </>
  )
}
