import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='Filters'>
      <div className='Filters-head app__flex'>
        <p className='p-text'>Select Filters</p>
        <i class="fa-solid fa-filter-circle-xmark"></i>
      </div>

      <div className='Filters-select app__flex'>
        <button className='one'>strap-long X</button>
        <button>colour X</button>
        <button>size X</button>
        <button>brand X</button>
      </div>

    </div>
  )
}

export default Filter