import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import { VscMenu } from 'react-icons/vsc'
import { CgClose } from 'react-icons/cg'

import logo from '../Data/SHARON.svg'

function NavBar() {
  const [isChecked, setIsChecked] = useState(false)

    const handleChecked = () => {
        setIsChecked(!isChecked)
    }

    const handleCheckedFalse = () => {
        setIsChecked(false)
    }
  return (
    <header >
      <div className='navbar split'>
        <section className='navbar-logo'>
          <Link to='/'><img src={logo} alt='speaker logo' /></Link>
        </section>
        <section className='navbar-menu-items'>
        <input type="checkbox" id="check" checked={isChecked} onChange={handleChecked} />
                <label for="check">
                    <VscMenu id="button"/>
                    <CgClose id='cancel' />
                </label>
          <ul>
            <li onClick={handleCheckedFalse}><NavLink to='/' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Home<hr/></NavLink></li>
            <li onClick={handleCheckedFalse}><NavLink to='/about' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>About<hr/></NavLink></li>
            <li onClick={handleCheckedFalse}><NavLink to='/media' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Media<hr/></NavLink></li>
            <li onClick={handleCheckedFalse}><NavLink to='/faq' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>FAQ<hr/></NavLink></li>
            <li onClick={handleCheckedFalse}><NavLink to='/references' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>References<hr/></NavLink></li>
            <li onClick={handleCheckedFalse}><NavLink to='/contact' className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Contact<hr/></NavLink></li>
          </ul>
        </section>
      </div>
    </header>
  )
}

export default NavBar