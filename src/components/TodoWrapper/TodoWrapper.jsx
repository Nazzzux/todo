import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoWrapper.css'


export default function TodoWrapper(props) {
  const todoList = useSelector(state => state.todo.todoList)
  const state = useSelector(state => state.todo.todoList)

  return (
    <div className='TodoWrapper'>
      <p>{JSON.stringify(state)}</p>
      <ul className='TodoWrapper__list'>
        {todoList.map(todo => (
          <li className="TodoWrapper__item">
            <TodoItem id={todo.id} isDone={todo.isDone} title={todo.title} key={todo.id} />
          </li>
        ))}
      </ul>
    </div>
  )
}
