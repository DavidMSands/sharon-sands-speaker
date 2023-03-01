import React from 'react'
import { Link, NavLink } from "react-router-dom"

import logo from '../Data/SHARON.svg'

function NavBar() {
  return (
    <header className='navbar split'>
      <section className='navbar-logo'>
        <img src={logo} alt='speaker logo' />
      </section>
      <section className='navbar-menu-items'>
        <ul>
          <li><NavLink to='/' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Home<hr/></NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>About<hr/></NavLink></li>
          <li><NavLink to='/media' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Media<hr/></NavLink></li>
          <li><NavLink to='/faq' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>FAQ<hr/></NavLink></li>
          <li><NavLink to='/references' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>References<hr/></NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Contact<hr/></NavLink></li>
        </ul>
      </section>
    </header>
  )
}

export default NavBar