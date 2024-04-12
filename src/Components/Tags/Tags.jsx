import React from 'react'
import './Tags.css'

const Tags = () => {
  return (
      <div className='Tags'>
        <p>
          Popular tags for bags.
        </p>

        <div className='app__flex'>
        {['Clutch','Fabric','Baggit','Multiples'].map((item,index) => (
          <div key={index} className='Tag-item app__flex app__primarybg'>
              {item}
          </div>
        )
        )}
        </div>
      </div>


  )
}

export default Tags