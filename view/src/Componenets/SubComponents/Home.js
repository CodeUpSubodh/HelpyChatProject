import React, { useState,useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ChatBox from './ChatBox'
import HeaderLogOut from '../HeaderLogOut'

function Home() {
  const[isLoggedIn,setLogin]=useState(false)
  useEffect(() => {
  if(window.localStorage.getItem("token"))
  {
    setLogin(true)
  }
  else{
    setLogin(false)
  }
});
  return (
    <>
        {isLoggedIn
        ? <HeaderLogOut />
        : < Header/>
      }
        <div className='chatcont'>
        <ChatBox />
        </div>
        <Footer/>
    
    </>
  )
}

export default Home