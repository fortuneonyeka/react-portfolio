import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
import Frontend from "../../data/FrontEndData"
import Backend from "../../data/BackEndData"

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="myTech">My Technical Experience</h2>

      <div className="container experience__container">
        <div className="frontend__experience">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details"> 
              {Frontend.map((item) => {
               return(
                <div>
                  <div className="experience__details-div">
                  <BsPatchCheckFill className="detail-icon"/>
                <h4 key={item.name}>{item.name}</h4></div>
                <small className="text-light">{item.experience}</small>
                </div>
               ) 
              })}
              
              <small>{Frontend.experience}</small>
            </article>
          </div>
        </div>
        <div className="backend__experience">
          <h3>Backend Development</h3>
          <div className="experience__content">
              <article className="experience__details">
              {Backend.map((item) => {
               return(
                  <div>
                    <div className="experience__details-div">
                    <BsPatchCheckFill className="detail-icon"/>
                    <h4 key={item.name}>{item.name}</h4></div>
                    <small className="text-light">{item.experience}</small>
                  </div>
               ) 
              })}
              </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience