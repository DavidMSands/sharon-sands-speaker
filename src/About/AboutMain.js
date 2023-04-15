import React from 'react'
import sharonSands from '../Data/About/sharon-sands-headshot.png'
import psalm from '../Data/About/psalm-verse-about.svg'

function AboutMain() {
  return (
    <div className='about-section'>
      <img src={psalm} alt='psalm 73:28 verse graphic' />
      <div className='about-container'>
        <img src={sharonSands} alt='sharon sands headshot' />
        <div>
          <p>I grew up in Seattle, WA surrounded by family and extended family that deeply loved Jesus. Right before my Senior year in high school, my family moved to Austin, TX. </p>
          <p>I had a passion for missions and student ministry and began serving the Lord at the age of 17, leading a girls’ discipleship group. Through the years, the Lord continued to open doors for me to minister to students in Texas, Arkansas, and Heidelberg, W. Germany. </p>
          <p>At the age of twenty-eight, I came to Denver to be a part of Youth with A Mission (YWAM). I fell in love with Denver, and soon after my time in YWAM, I met and fell in love with my husband, Todd!  We met at church, dated, and got married all in the span of eight months’ time!  Thirty years and five kids later (now with two precious daughters-in-law as well), we are just so grateful and amazed at God’s grace in our lives! </p>
          <p>God began opening doors for me to speak to women’s groups in the year 2000. I found it quite different from being a part of student ministry, but my heart very quickly became ignited at the value of ministering to the hearts of women. When women fall in love with Jesus and the Word of God, the ripple effects are huge; families are strengthened, and the next generation is impacted. Now, for twenty years, I have had the humble privilege, in several different capacities, to pour into the lives of women in the Front Range area and throughout the United States and beyond.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMain