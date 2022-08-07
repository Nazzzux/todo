import React from 'react'
import styles from './Header.css';
import { useSelector } from 'react-redux';

export default function Header() {
  const name = useSelector((state) => state.login.name)

  return (
    <div className='Header'>
     <div className='Container'>
        <h1>Welcome, {name || 'Stranger'}!</h1>
      </div>
    </div>
  )
}
