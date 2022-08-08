import React from 'react'
import "./Portfolio.css"
import Projects from "../../data/Projects"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article>
          {Projects.map((project) => {
            return (
              <div>
             <img src={project.img} alt="Fit App" />
          <h3>{project.name}</h3>
          <h3>{project.description}</h3>
          <a href={project.github}>GitHub</a>
          <a href={project.live}>Live</a>
              </div>
            )
          })}
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio