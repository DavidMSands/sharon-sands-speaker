import React from 'react'
import { Link } from "react-router-dom"

import logo from '../Data/SHARON.svg'

function Footer() {
  return (
    <footer>
        <div className='footer-container'>
           <Link to='/'><img src={logo} alt="sharon sands logo" /></Link> 
            <div className='divider'></div>
            <p>Sharon Sands © 2023 All Rights Reserved. | Website designed and built by: <a href='https://github.com/DavidMSands'>David Sands</a></p>
        </div>
    </footer>
  )
}

export default Footer