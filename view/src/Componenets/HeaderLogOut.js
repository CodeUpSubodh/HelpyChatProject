import { Link } from "react-router-dom";
import "../CSS/Header.css";
import { FaBars, FaTimes  } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi"
import React, { useEffect, useState } from "react";
import axios from "axios";
const HeaderLogOut = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  function logout(){
    window.localStorage.clear();
    window.location.href ="./";
  }
  useEffect(()=>{

    fetch("http://localhost:4000/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
         
          
        
        
  })
})
  
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img className="logo" src={require("../Assest/logo.png")} />
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <div>
            <Link to="/">Home</Link>
          </div>
        </li>

        <li>
          <div>
            <Link to="/about">About</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/Login">LogOut</Link>
          </div>
        </li>
        <li>
          <div onClick={logout}> 
            <HiOutlineLogout size={20} style={{color: "#fff"}}/>
          </div>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default HeaderLogOut;
