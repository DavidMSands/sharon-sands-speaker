import React from 'react'
import { render } from "react-dom";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function MediaMain() {
  return (
    <div id='media-container'>
      <div className='download-headshots-container'>
        <h3>Sharons' Headshots:</h3>
        <div className='headshot-split'>
          <img />
          <img />
          <img />
        </div>
      </div>
      <div className='sharon-bio'>
      <h3>Sharon Sands' Bio:</h3>
        <div className='bio-box'>
          <p>Sharon will tell you that the older she gets, the more she appreciates the huge, overflowing grace of God. Through many precious seasons of life, as well as some incredibly dark valleys, she has seen the Lord be forever gracious and faithful!</p>
          <p>Sharon has been married to her husband, Todd for over 30 years. They have 5 adult children and 2 amazing daughters-in-law, and grandbabies on the horizon!</p>
          <p>Sharon is the Women's Discipleship Director at Crossroads Community Church in Parker, CO and for 18 years was the Founder and Executive Director of Passionate Heart Ministries.   She has a passion to equip, nurture and encourage all women in their pursuit of Christ!</p>
        </div>
      </div>
      <div className='media-split'>
        <div>
        <p>The Heart of our Rock</p>
          <LiteYouTubeEmbed 
            id="Uxhf0ucjsa4"
            title="The Heart of our Rock"
          />
        </div>
        <div>
          <p>Heart of Worship Conference</p>
          <LiteYouTubeEmbed 
            id="G5od1jP0zvI"
            title="Heart of Worship Conference"
          />
        </div>
      </div>
      <div className='media-split'>
        <div>
            <p>Thirsty, Full, and Overflowing</p>
            <LiteYouTubeEmbed 
              id="mYOIfiBIE70"
              title="Thirsty, Full, and Overflowing"
            />
          </div>
          <div>
            <p>Christmas Talk 2011</p>
            <LiteYouTubeEmbed 
              id="Rho5OeveNys"
              title="Christmas Talk 2011"
            />
          </div>
      </div>
    </div>
  )
}

export default MediaMain