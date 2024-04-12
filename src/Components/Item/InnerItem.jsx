import React from 'react'
import Images from '../../Constants/Images'
import './InerItem.css'

const InnerItem = () => {
  return (
    <div className='app__flex Inneritem app__whitebg'>
        <div className='inneritem-pic '>
            <img src={Images.Bag} alt="" />
        </div>
        <div className='inneritem-detail'>
            <h4>Bags on Timpu <i className="fa-regular fa-circle-check"></i></h4>
            <p>1123 products   <i class="fa-solid fa-greater-than"></i></p>
        </div>
    </div>
  )
}

export default InnerItem