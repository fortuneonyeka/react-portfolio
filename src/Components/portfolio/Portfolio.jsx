import React from "react";
import "./Portfolio.css";
import Projects from "../../data/Projects";

const Portfolio = () => {
  return (
    <section id="portfolio">
   
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
     

      <div  className="container portfolio__container">
      {Projects.map((project, index) => {
        return (
          
            <article className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={project.img} alt={project.name} className="project-img"/>
              </div>
              <h3>{project.name.toLocaleUpperCase()}</h3>
              <h5>{project.description}</h5>
              <a href={project.github} className="btn" target="_blank">
                GitHub
              </a>
              <a
                href={project.live}
                className="btn btn-primary"
                target="_blank"
              >
                Live
              </a>
            </article>
         
        );
      })}
       </div>
    </section>
  );
};

export default Portfolio;
