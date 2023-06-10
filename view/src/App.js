import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Componenets/SubComponents/Home";
import About from "./Componenets/SubComponents/About";
import Contact from "./Componenets/SubComponents/Contact";
import Signup from "./Componenets/SubComponents/Signup";
import Login from "./Componenets/SubComponents/Login";
import FrontPage from "./Componenets/SubComponents/FrontPage";

const App = () => {
  // const user = localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
};

export default App;
