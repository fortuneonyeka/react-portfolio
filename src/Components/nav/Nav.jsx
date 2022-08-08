import React, {useState} from 'react'
import { NavLink } from "react-router-dom"
import "./Nav.css"
import {BiHome} from "react-icons/bi"
import {AiOutlineInfoCircle} from "react-icons/ai"
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
  <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><div className="nav-item-div">
    <BiHome className="nav-item"/>
    <h3 >Home</h3>
    </div></a>
  <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><div className="nav-item-div">
    <AiOutlineInfoCircle className="nav-item"/>
    <h3 >About</h3>
    </div></a>
  <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><div className="nav-item-div">
    <BiBookAlt className="nav-item"/>
    <h3 >Experience</h3>
    </div></a>
  <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><div className="nav-item-div">
    <MdDesignServices className="nav-item"/>
    <h3 >Porfolio</h3>
    </div></a>
  <a href="#recomendations" onClick={() => setActiveNav("#recomendations")} className={activeNav === "#recomendations" ? "active" : ""}><div className="nav-item-div">
    <MdRecommend className="nav-item"/>
    <h3 >Recomendations</h3>
    </div></a>
  <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><div className="nav-item-div">
    <MdOutlineContactMail className="nav-item"/>
    <h3 >Contact</h3>
    </div></a>
    </nav>
  )
}

export default Nav