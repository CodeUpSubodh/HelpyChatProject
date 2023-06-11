import React from "react";
import {useState , useEffect} from "react"
import Header from "../Header";
import "../../CSS/FrontPage.css";
import { Link } from "react-router-dom";
import HeaderLogOut from "../HeaderLogOut";
export default function FrontPage() {
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
      <div className="navbarforhome">
        {isLoggedIn
        ?<Header/>
      :<HeaderLogOut/> }
        <div className="contents">
          <h1 className="headingforhome">Welcome to Advanced Era of AI</h1>
          <h1 className="subheadingforhome">Why to burn yourself Out!</h1>
          <h1 className="subheadingforhome">
            Get Answer of all your doubts using HelpyChat
          </h1>
          <div className="outerbox">
            <Link className="linktohome" to={"/home"}>
              HelpyChat
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
