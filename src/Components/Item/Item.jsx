import React from 'react'
import InnerItem from "./InnerItem"
import './Item.css'

const Item = () => {
  return (
    <>
    <div className='Item app__primarybg'>
      <InnerItem/>
      <p>Or set filter and help us choose the best bag for you.</p>
    </div>
    <p className='p-text time'>4:48 PM</p>
    </>
  )
}

export default Item