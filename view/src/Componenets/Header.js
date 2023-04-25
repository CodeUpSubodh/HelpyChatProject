import { Link } from "react-router-dom";
import "../CSS/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const Navbar = () => {
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
            <Link to="/Login">Login</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/Signup">Signup</Link>
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

export default Navbar;
