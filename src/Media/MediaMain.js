import React from 'react'

function MediaMain() {
  return (
    <div id='media-container'>
      <div className='media-split'>
        <div>
          <p>The Heart of our Rock</p>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/Uxhf0ucjsa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
          <p>Heart of Worship Conference</p>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/G5od1jP0zvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div className='media-split'>
        <div>
            <p>Thirsty, Full, and Overflowing</p>
            <iframe width="700" height="394" src="https://www.youtube.com/embed/mYOIfiBIE70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
            <p>Christmas Talk 2011</p>
            <iframe width="700" height="394" src="https://www.youtube.com/embed/Rho5OeveNys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </div>
    </div>
  )
}

export default MediaMain