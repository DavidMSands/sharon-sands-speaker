import React from 'react'
import { allReferences } from './AllReferencesData'
import mountains from '../Data/References/mountains-landscape.jpg'

function ReferencesMain() {
  return (
    <div>
      <div className='references-page'>
      <section rel="preload">
        <div  className="back-img"></div>
      </section>
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
  )
}

export default ReferencesMain