import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function NavBar() {
  return (
    <nav>
        {`Logo`} <br/>
        <Link to='/new-task'>New Task</Link><br />
        <Link to='/all'> All task</Link>
    </nav>
  )
}
