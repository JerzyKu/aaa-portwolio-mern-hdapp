import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import logo from '../../images/react-icon-small.png'


export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt='logo'/>
        <p className='nav-bar--baner'>{`Logo`} </p>
        <Link to='/new-task'>New Task</Link><br />
        <Link to='/all'> All task</Link>
    </nav>
  )
}
