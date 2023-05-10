import React from 'react'
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'

import { allReferences } from './AllReferencesData'
import graphImage from '../Data/GraphImage.jpg'
import mountains from '../Data/References/mountains-g8f7a62b5a_1920.jpg'

function ReferencesMain() {
  return (
    <motion.div initial={{opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div>
      <div className='references-page'>
      <Helmet>
        <meta property='og:title' content='Media - Sharon Sands Speaker' />
        <meta property="og:url" content="https://sharonsandsspeaker.com/media" />
        <meta property="og:description" content="Sharon is the Women's Discipleship Director at Crossroads Community Church in Parker, CO and for 18 years was the Founder and Executive Director of Passionate Heart Ministries. She has a passion to equip, nurture and encourage all women in their pursuit of Christ!" />
        <meta property="og:image" content={graphImage} />
      </Helmet>
      <div className='references-header'>
        <h2><b>References:</b></h2>
      </div>
          {allReferences.map(reference => (
            <section className='all-references'>
              <div className='quote'>
                <blockquote>
                  <p>{reference.quote}</p>
                </blockquote>
                <cite>
                  <span>{reference.name}</span><br />
                  {reference.title}<br />
                  {reference.ministry}
                </cite>
              </div>
            </section>
          ))}
      </div>
    </div>
    </motion.div>
  )
}

export default ReferencesMain