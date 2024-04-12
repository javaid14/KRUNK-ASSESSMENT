import React from 'react'
import Dot from '../Support/Dot/Dot'
import './Header.css'
import Images from '../../Constants/Images';


const Header = () => {
  return (
    <div className='Header app__primarybg app__flex'>
        <div className='avatar app__flex'>
            <img src={Images.Robot} />
            <Dot/>
        </div>
        <div className='profile'>
            <h1>Timpu <i className="fa-regular fa-circle-check"></i></h1>
            <p>chat assistant </p>
        </div>
        <div className='active app__flex'>
            <Dot/>
            <p> Online</p>
        </div>
    </div>
  )
}

export default Header