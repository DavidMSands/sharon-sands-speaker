import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from "react-helmet";

import graphImage from '../Data/GraphImage.jpg'

import corinthians from '../Data/Contact/cor-contact-verse.svg'

function ContactMain() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <div className='contact-container'>
    <Helmet>
        <meta property='og:title' content='Contact - Sharon Sands Speaker' />
        <meta property="og:url" content="https://sharonsandsspeaker.com/contact" />
        <meta property="og:description" content="Sharon is the Women's Discipleship Director at Crossroads Community Church in Parker, CO and for 18 years was the Founder and Executive Director of Passionate Heart Ministries. She has a passion to equip, nurture and encourage all women in their pursuit of Christ!" />
        <meta property="og:image" content={graphImage} />
    </Helmet>
      <div className='contact-img-container'>
        <img src={corinthians} alt='1 corinthians 2:2 graphic' />
      </div>
      <h3>Contact <b>Sharon</b></h3>
      <form action="https://formsubmit.co/cc8c1499b6e41d039541d51631f63854" method="POST" >
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <label for="fname">First Name *</label><br/>
          <input type="text" id="fname" name="firstname" className='form-input' required /><br/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .25 }}>
        <label for="lname">Last Name *</label><br/>
        <input type="text" id="lname" name="lastname" className='form-input' required /><br/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .5 }}>
        <label for="email">Email *</label><br/>
        <input type="email" id="email" name="email" className='form-input' required /><br/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .75 }}>
        <label for="phone">Phone Number *</label><br/>
        <input type="tel" id="phone" name="phone" className='form-input' required /><br/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
        <label for="date">Date of Event *</label><br/>
        <input type="date" id="date" name="date" className='form-input' required /><br/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.25 }}>
        <label for="venue">Venue Name *</label><br/>
        <input type="text" id="venue" name="venue" className='form-input' required /><br/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
        <label for="audience">Audience Size *</label><br/>
        <input type="text" id="audience" name="audience" className='form-input' required /><br/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.75 }}>
        <label for="church">Name of Host Church or Ministry *</label><br/>
        <input type="text" id="church" name="church" className='form-input' required /><br/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
        <label for="details">Any Other Details You Would Like To Share?</label><br/>
        <textarea type="text" id="details" name="details" className='form-input' /><br/>
        </motion.div>
        <input type="hidden" name="_next" value="https://sharonsandsspeaker.com/contact/confirmation"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
    </motion.div>
  )
}

export default ContactMain