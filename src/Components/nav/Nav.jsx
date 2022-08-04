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
     <a onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} href="#"><BiHome/></a>
     <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FcAbout/></a>
     <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBookAlt/></a>
     <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#about" ? "active" : ""}><MdDesignServices/></a>
     <a href="#contact" onClick={() => setActiveNav("contact")} className={activeNav === "#contact" ? "active" : ""}><MdOutlineContactMail/></a>
     <a href="#testimonials" onClick={() => setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}><MdRecommend/></a>
    </nav>
  )
}

export default Nav