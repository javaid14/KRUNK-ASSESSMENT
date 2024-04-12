import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer app__primarybg'>
      <div className='msgSend'>
        <div className='message'>
          <input type="text" placeholder='Type your message' />
          <i class="fa-solid fa-paperclip"></i>
          </div>
          <button>  <i class="fa-solid fa-greater-than"></i>   </button>   
        </div>
      
        <div className='FooterText'>
          <p>Powered by Krunk.ai <i class="fa-solid fa-droplet"></i></p>
        </div>

    </div>
  )
}

export default Footer