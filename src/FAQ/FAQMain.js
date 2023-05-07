import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from "react-helmet";

import { FAQs } from './FAQData';
import { StatementOfFaith } from './StatementOfFaithData';
import genesisScripture from '../Data/FAQ/genesis-scripture-faq.svg'

function FAQMain() {
  const [selected, setSelected] = useState(null);
  let num = 1;
  
  const toggle = i => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className='faq-container'>
      <Helmet>
          <meta property='og:title' content='FAQ - Sharon Sands Speaker' />
          <meta property="og:url" content="https://sharonsandsspeaker.com/faq" />
      </Helmet>
      <div id='faq-title-container'>
        <p>FAQs:</p>
      </div>
      <div className='accordian'>
        {FAQs.map((item, i) => {
         num === 1 ? num = 0 : num += 0.25;
          return <div className="faq-item">
                  <div className={ selected === i ? 'faq-title-selected' : "faq-title"} onClick={() => toggle(i)}>
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: num }} viewport={{ once: true }}>
                      <h2>{item.question}</h2>
                    </motion.div>
                    <p className='plus-minus'>{selected === i ? "–" : "+"}</p>
                  </div>
                  <div className={selected === i ? "faq-content-show" : "faq-content-hide"}>
                    {item.answers.map(a => (
                    <p>{a}</p>
                    ))}
                  </div>
                </div>
        })}
      </div>
      <h1 className='statement-title'>Statement of Faith:</h1>
      <div className='statement-of-faith'>
        {/* <hr></hr> */}
          {StatementOfFaith.map(i => (
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div>
              <h2>{i.title}</h2>
              {typeof(i.content) === "string" ? <p>{i.content}</p> : i.content.map(j => (
                <p>{j}</p>
              ))}
              {i.elaboration.length === 0 
                ? null 
                : i.elaboration.map(elab => (
                  <div>
                    <p><b>{elab.position}</b> {elab.title ? <b>{elab.title}</b> : elab.content}</p>
                    <p>{elab.title ? elab.content : null}</p>
                  </div>
              ))}
            </div>
            </motion.div>
          ))} 
      </div>
      <div className='genesis-picture-container'>
        <img src={genesisScripture} alt="genesis 16:13 picture" />
      </div>
    </div>
  )
}

export default FAQMain