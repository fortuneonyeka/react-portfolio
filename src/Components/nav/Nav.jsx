import React, {useState} from 'react'
import { NavLink } from "react-router-dom"
import "./Nav.css"
import {BiHome} from "react-icons/bi"
import {FcAbout} from "react-icons/fc"
import {MdOutlineContactMail} from "react-icons/md"
import {MdDesignServices, MdRecommend} from "react-icons/md"
import {BiBookAlt} from "react-icons/bi"


const Nav = () => {
  // const navLinks = ['Home', 'About', 'Experience', 'Porfolio', 'Contact', 'Testimonials'];
const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
       
  {/* {navLinks.map((link) => (
    
      <NavLink 
        href={`#${link}`} 
        className={`nav-link ${activeNav == link && 'active'}`}
        onClick={() => setActiveNav(link)}
      >{link}</NavLink>
   
  ))} */}
  <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>Home</a>
  <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>About</a>
  <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>Experience</a>
  <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}>Portfolio</a>
  <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>Contact</a>
    </nav>
  )
}

export default Nav