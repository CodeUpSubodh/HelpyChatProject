import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import "../../CSS/FrontPage.css"
import IntroImg from "../../Assest/intro.jpg"
import { Link } from 'react-router-dom'
export default function FrontPage() {
  return (
    <>
    <div className='navbarforhome'>
    <Header/>
    <div className='contents'>
    <h1 className='headingforhome'>Welcome to Advanced Era of AI</h1>
    <h1 className='subheadingforhome'>Why to burn yourself Out!</h1>
    <h1 className='subheadingforhome'>Get Answer of all your doubts using HelpyChat</h1>
    <div className='outerbox'>
    <Link className='linktohome' to={'/home'}>HelpyChat</Link>
    </div>
    </div>
    </div>
    
    {/* <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div> */}
  
    </>
  )
}
