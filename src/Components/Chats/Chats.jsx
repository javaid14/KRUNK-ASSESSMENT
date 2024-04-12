import React from 'react'
import './Chats.css'

const Chats = () => {
  return (
    <div className='chat'>

    <div className='Assistant'>
      <div className='app__primarybg inner'>
      <p>
        Hi Sam! I am your personal shopping assistant, how can I help you today?
      </p>
      </div>
      <p className='p-text one'>4:45 PM</p>
    </div>

    <div className='User'>
      <div className='app__yellowbg inner'>
      <p>
        I am looking for a hand bag, with long strap.
      </p>
      </div>
      <p className='p-text two'>4:48 PM</p>
      </div>
    </div>
    
  )
}

export default Chats