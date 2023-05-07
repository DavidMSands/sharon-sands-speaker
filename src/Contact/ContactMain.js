import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from "react-helmet";

import corinthians from '../Data/Contact/cor-contact-verse.svg'

function ContactMain() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <div className='contact-container'>
    <Helmet>
        <meta property='og:title' content='Contact - Sharon Sands Speaker' />
        <meta property="og:url" content="https://sharonsandsspeaker.com/contact" />
    </Helmet>
      <h3>Contact <b>Sharon</b></h3>
      <form action="https://formsubmit.co/b973eeca66ee004dff6b22ce68f2dd5c" method="POST" >
        <label for="fname">First Name *</label><br/>
        <input type="text" id="fname" name="firstname" className='form-input' required /><br/>
        <label for="lname">Last Name *</label><br/>
        <input type="text" id="lname" name="lastname" className='form-input' required /><br/>
        <label for="email">Email *</label><br/>
        <input type="email" id="email" name="email" className='form-input' required /><br/>
        <label for="phone">Phone Number *</label><br/>
        <input type="tel" id="phone" name="phone" className='form-input' required /><br/>
        <label for="date">Date of Event *</label><br/>
        <input type="date" id="date" name="date" className='form-input' required /><br/>
        <label for="venue">Venue Name *</label><br/>
        <input type="text" id="venue" name="venue" className='form-input' required /><br/>
        <label for="audience">Audience Size *</label><br/>
        <input type="text" id="audience" name="audience" className='form-input' required /><br/>
        <label for="church">Name of Host Church or Ministry *</label><br/>
        <input type="text" id="church" name="church" className='form-input' required /><br/>
        <label for="details">Any Other Details You Would Like To Share?</label><br/>
        <textarea type="text" id="details" name="details" className='form-input' /><br/>
        <button type="submit">SUBMIT</button>
      </form>
      <div className='contact-img-container'>
        <img src={corinthians} alt='1 corinthians 2:2 graphic' />
      </div>
    </div>
    </motion.div>
  )
}

export default ContactMain