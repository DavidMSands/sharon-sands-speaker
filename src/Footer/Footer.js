import React from 'react'
import logo from '../Data/SHARON.svg'

function Footer() {
  return (
    <footer>
        <div className='footer-container'>
            <img src={logo} alt="sharon sands logo" />
            <hr></hr>
            <p>Sharon Sands © 2023 All Rights Reserved. | Website designed and built by: <a href='https://github.com/DavidMSands'>David Sands</a></p>
        </div>
    </footer>
  )
}

export default Footer