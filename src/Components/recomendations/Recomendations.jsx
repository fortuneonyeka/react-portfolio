import React from 'react'
import "./Recomendations.css"
import RecomendationsData from "../../data/Recomendations"

const Recomendations = () => {
  return (
    <section id="recomendations">
      <h5>Reviews From Collegues</h5>
      <h2>Recomendations</h2>

      <div className="container testimonials__container">
        {RecomendationsData.map((recomendation, index) => {
          return (
<article className="testimonial">
          <div className="collegue__image">
            <img src={recomendation.img} alt={recomendation.name} className="collegue__profile-image" />
          </div>
          <h3 className="collegue__name">{recomendation.name}</h3>
          <h5 className="collegue__recomendation">{recomendation.recomendation}</h5>
          <a href={recomendation.linkedin} className="btn">linkedIn</a>
        </article>
          )
        })}
        
      </div>
    </section>
  )
}

export default Recomendations