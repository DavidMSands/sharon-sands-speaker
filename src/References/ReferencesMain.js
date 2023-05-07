import React from 'react'
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'

import { allReferences } from './AllReferencesData'

function ReferencesMain() {
  return (
    <motion.div initial={{opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div>
      <div className='references-page'>
      <Helmet>
        <meta property='og:title' content='Media - Sharon Sands Speaker' />
        <meta property="og:url" content="https://sharonsandsspeaker.com/media" />
      </Helmet>
      <div>
        <h2>Sharon's <b>References:</b></h2>
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