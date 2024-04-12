import React from 'react'
import Header from './Components/Header/Header'
import Chats from './Components/Chats/Chats'
import Tags from './Components/Tags/Tags'
import Item from './Components/Item/Item'
import Filter from './Components/Filter/Filter'
import Footer from './Components/Footer/Footer'
import './Mobile.css'

const Mobile = () => {
  return (
    <div className='app__whitebg Mobile'>
        <Header />
        <Chats />
        <Tags />
        <Item />
        <Filter />
        <Footer />
    </div>
  )
}

export default Mobile