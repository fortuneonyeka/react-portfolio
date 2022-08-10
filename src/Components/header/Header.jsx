import React from 'react'
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import ProfilePic from "../../Assets/WhatsApp Image 2022-01-28 at 10.04.18 PM.jpeg"
import "./Header.css"

const Header = () => {
  return (
    
    <header>
      <div className="container header_container" id="header">
        <h5>Hello I’m</h5>
        <h1>Ihedoro Fortunatus</h1>
        <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className="me">
        <img src={ProfilePic} alt="profile-pic" className="profile-pic"/>
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header