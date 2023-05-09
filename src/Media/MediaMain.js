import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from "react-helmet";

import downloadHeadshot1 from '../Data/Media/Sharon - headshots-15_websize.jpg'
import downloadHeadshot2 from '../Data/Media/Sharon - headshots-9_websize.jpg'
import downloadHeadshot3 from '../Data/Media/sharon-sands-2023.jpg'
import genHis from '../Data/Media/gen-his-logo-1.webp'
import headshot1 from '../Data/Media/sharon-about-media.jpg'
import headshot2 from '../Data/Media/sharon-red-coat-headshot.jpg'
import headshot3 from '../Data/Media/sharon-sands-church-pic.jpg'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { BsDownload, BsCheckCircle } from 'react-icons/bs';
import { MdContentCopy } from 'react-icons/md';
import graphImage from '../Data/GraphImage.jpg'

function MediaMain() {
  const [copySuccess, setCopySuccess] = useState(false);

  function downloadImage(photoRef, imageName) {
    const link = document.createElement('a');
    link.href = photoRef;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const copyToClipboard = (e) => {
    const copyText = document.createElement("textarea");
    copyText.value = "Sharon will tell you that the older she gets, the more she appreciates the huge, overflowing grace of God. Through many precious seasons of life, as well as some incredibly dark valleys, she has seen the Lord be forever gracious and faithful!\n\nSharon has been married to her husband, Todd for over 30 years. They have 5 adult children and 2 amazing daughters-in-law, and grandbabies on the horizon!\n\nSharon is the Women's Discipleship Director at Crossroads Community Church in Parker, CO and for 18 years was the Founder and Executive Director of Passionate Heart Ministries. She has a passion to equip, nurture and encourage all women in their pursuit of Christ!"; 
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand("copy");
    document.body.removeChild(copyText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 5000);
  };

  return (
    <div id='media-container'>
      <Helmet>
        <meta property='og:title' content='Media - Sharon Sands Speaker' />
        <meta property="og:url" content="https://sharonsandsspeaker.com/media" />
        <meta property="og:description" content="Sharon is the Women's Discipleship Director at Crossroads Community Church in Parker, CO and for 18 years was the Founder and Executive Director of Passionate Heart Ministries. She has a passion to equip, nurture and encourage all women in their pursuit of Christ!" />
        <meta property="og:image" content={graphImage} />
      </Helmet>
      <div className='download-headshots-container'>
        <h3 className='headshot-title'>Sharons' <b>Headshots:</b></h3>
        <div className='headshot-split'>
          <div className='download-container'>
            <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
              <img src={headshot1} alt='sharon outdoor headshot' className='headshot-1' onClick={() => downloadImage(downloadHeadshot1, 'Sharon - headshot1_websize.jpg')}/>
              <BsDownload  className='download-btn'/>
            </motion.div>
          </div>
          <div className='download-container'>
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
              <img src={headshot2} alt='sharon outdoor headshot red coat' className='headshot-2' onClick={() => downloadImage(downloadHeadshot2, 'Sharon - headshot2_websize.jpg')}/>
              <BsDownload  className='download-btn'/>
            </motion.div>
          </div>
          <div className='download-container'>
            <motion.div initial={{ opacity: 0, x: 500 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
              <img src={headshot3} alt='sharon headshot' className='headshot-3' onClick={() => downloadImage(downloadHeadshot3, 'Sharon - headshot3_websize.jpg')}/>
              <BsDownload  className='download-btn'/>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='sharon-bio'>
      <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
      <h3>Sharon's <b>Bio:</b></h3>
        <div className='bio-box'>
          <div>
            <p>Sharon will tell you that the older she gets, the more she appreciates the huge, overflowing grace of God. Through many precious seasons of life, as well as some incredibly dark valleys, she has seen the Lord be forever gracious and faithful!</p>
            <p>Sharon has been married to her husband, Todd for over 30 years. They have 5 adult children and 2 amazing daughters-in-law, and grandbabies on the horizon!</p>
            <p>Sharon is the Women's Discipleship Director at Crossroads Community Church in Parker, CO and for 18 years was the Founder and Executive Director of Passionate Heart Ministries.   She has a passion to equip, nurture and encourage all women in their pursuit of Christ!</p>
          </div>
          <MdContentCopy className='copy-btn' onClick={copyToClipboard}/>
        </div>
        </motion.div>
        <div className={`popup ${copySuccess ? "active" : ""}`}><BsCheckCircle className='check-box'/> Copied Sharon's bio to clipboard</div>
      </div>
      <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
      <h3>Speaking <b>Clips:</b></h3>
      <div className='media-split'>
        <div>
        <p>The Heart of our Rock</p>
          <LiteYouTubeEmbed 
            id="Uxhf0ucjsa4"
            title="The Heart of our Rock"
            className="youtube-video"
          />
        </div>
        <div>
          <p>Heart of Worship Conference</p>
          <LiteYouTubeEmbed 
            id="G5od1jP0zvI"
            title="Heart of Worship Conference"
            playerClass="lty-playbtn"
          />
        </div>
      </div>
      <div className='media-split'>
        <div>
            <p>Thirsty, Full, and Overflowing</p>
            <LiteYouTubeEmbed 
              id="mYOIfiBIE70"
              title="Thirsty, Full, and Overflowing"
              playerClass="lty-playbtn"
            />
          </div>
          <div>
            <p>Christmas Talk 2011</p>
            <LiteYouTubeEmbed 
              id="Rho5OeveNys"
              title="Christmas Talk 2011"
              playerClass="lty-playbtn"
            />
          </div>
      </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
      <div className='gen-his'>
        <p>Want to hear more from Sharon?</p>
        <p>Read <a href='https://www.strategicrenewal.com/grace-changes-us/' target="_blank">"The Grace That Changes Us"</a> featured on Strategic Renewal.</p>
        <p>Also, check out the <a href='https://genhisbettertogether.wordpress.com/list-of-posts/' target="_blank">"GEN HIS - BETTER TOGETHER"</a> blog!</p>
        <img src={genHis} alt='gen his logo' className='gen-his-logo'/>
      </div>
      </motion.div>
    </div>
  )
}

export default MediaMain