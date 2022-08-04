import React, {useState} from 'react'
import "./Nav.css"
import {BiHome} from "react-icons/bi"
import {FcAbout} from "react-icons/fc"
import {MdOutlineContactMail} from "react-icons/md"
import {MdDesignServices, MdRecommend} from "react-icons/md"
import {BiBookAlt} from "react-icons/bi"


const Nav = () => {
const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
     <a onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} href="#">Home</a>
     <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>About</a>
     <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>Experience</a>
     <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#about" ? "active" : ""}>Projects</a>
     <a href="#contact" onClick={() => setActiveNav("contact")} className={activeNav === "#contact" ? "active" : ""}>Contact</a>
     <a href="#testimonials" onClick={() => setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}>Recommendations</a>
    </nav>
  )
}

export default Nav