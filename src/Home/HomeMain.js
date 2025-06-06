import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";

import mainAboutPhoto from '../Data/Home/sharon-about-home.jpg'
import mountains from '../Data/Home/colorado-mountains-2.jpg'
import speaking from '../Data/Home/sharon-speaking.jpg'
import laughing from '../Data/Home/sharon-sands-mountain-backround-web.jpg'
import danielVerse from '../Data/Home/daniel-verse-home.svg'
import graphImage from '../Data/GraphImage.jpg'


function HomeMain() {
  const newHomePhotos = [
    {
      id: 1,
      image: laughing,
      alt: "sharon sands colorado mountains",
      text: "ABOUT",
      path: "/about",
      subtext: "Learn more about Sharon Sands",
      width: 1000,
      height: 1469
    },
    {
      id: 2,
      image: mountains,
      alt: "colorado mountains",
      text: "FAQ",
      path: "/faq",
      subtext: "Frequently asked questions",
      width: 1000,
      height: 1503
    },
    {
      id: 3,
      image: speaking,
      alt: "sharon sands speaking at conference",
      text: "MEDIA",
      path: "/media",
      subtext: "Past events & talks",
      width: 1536,
      height: 2048
    }
  ]

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}>
    <div className='home-page'>
    <Helmet>
        <meta property='og:title' content='Sharon Sands Speaker' />
        <meta property="og:url" content="https://sharonsandsspeaker.com/" />
        <meta property="og:description" content="Sharon is the Women's Discipleship Director at Crossroads Community Church in Parker, CO and for 18 years was the Founder and Executive Director of Passionate Heart Ministries. She has a passion to equip, nurture and encourage all women in their pursuit of Christ!" />
        <meta property="og:image" content={graphImage} />
    </Helmet>
     
    <section class="workshop-banner" role="banner">
    <p class="headline">
      <a href="/workshop" class="click-link">
        CLICK HERE
      </a>
      TO LEARN ABOUT Sharon’s “MOMS OF PRODIGALS WORKSHOP”
    </p>
  </section>
      <section className='home-about-section split-home'>
        <div>
        <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <img src={mainAboutPhoto} />
        </motion.div >
        </div>
        <div className='home-about-paragraph'>
          <p>Sharon Sands</p>
          <p>Speaker</p>
          <p>Sharon is a passionate Bible teacher, communicator, and mentor.</p>
          <p>With over 35 years of leadership experience she has a deep love for Jesus and finds great joy in the humbling honor of investing in hearts across the U.S. and beyond.</p>
          <div>
          <Link to='/contact'><button>Contact Sharon</button></Link>
          </div>
        </div>
      </section>

      
      <section className='home-reference-section'>
      <motion.div initial={{ opacity: 0, x: -25}} whileInView={{ opacity: 1, x: 0}} transition={{ duration: 1.5 }} viewport={{ once: true }}>
        <div className='quote'>
          <blockquote>
            <p>Hearing from Sharon’s heart is like hearing the sound from a soul who has known life well—and lived it exceedingly well. Not only does Sharon know the scripture and how it relates to us today, she also knows pain and grief. She is well acquainted with both—and that makes her more related to everyone else. I love to hear her teach—compact, engaging, challenging,  vulnerable, always speaking upward, never ‘down to.’ And who doesn’t long for that? I am never disappointed. To hear her speak on the grace of God, the challenges of life, the reality of God’s provision in tough times—well, it invites me deeper into the heart of God. What a stellar woman of faith!”</p>
          </blockquote>
          <cite>
            <span>Dr. Barry St. Clair</span><br />
            East-West Ministries<br />
            Vice-President of Global Youth Engagement
          </cite>
          <div className='more-references'>
            <AiOutlineDown />
            <Link to='/references'><p>Read more references</p></Link>
          </div>
        </div>
        </motion.div >
      </section>
      <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
      <section className='photo-section'>
        <div id='pics'>
          {newHomePhotos.map(image => (
          <Link to={image.path}><div className='home-photo-container'>
             <img
            src={image.image}
            alt={image.alt}
            width={image.width}
            height={image.height}
            />
            <div className='overlay'>
              <p id='photo-text'>{image.text}</p>
              <p id='photo-subtext'>{image.subtext}</p>
            </div>
          </div></Link>
        ))}
        </div>
      </section>
      </motion.div >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.75 }} viewport={{ once: true }}>
      <div id='home-verse'>
        <img src={danielVerse} alt='verse daniel 11:32b' />
      </div>
      </motion.div >
    </div>
    </motion.div >
  )
}

export default HomeMain