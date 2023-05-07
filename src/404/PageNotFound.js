import React from 'react'
import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <p>OOPS!</p> 
      <p>This page does not exist.</p>
      <p>Navigate back to Sharon Sands Speaker here: <Link to='/'>Home.</Link></p>
    </div>
  )
}

export default PageNotFound