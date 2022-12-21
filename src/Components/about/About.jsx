import React from "react";
import ProfilePic from "../../Assets/WhatsApp Image 2022-01-28 at 10.04.18 PM.jpeg";
import { FaAward } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { RiFolder4Fill } from "react-icons/ri";
import "./About.css";

const About = () => {

  const getYearsOfExperience = () => {
    var today = new Date();
    var startYear = 2019;
    var currentYearsOfExperience = today.getFullYear() - startYear;
    
    return currentYearsOfExperience;
}
  return (
    <section id="about">
        <h5>Know More</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img className="about_img" src={ProfilePic} alt="About me image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>{getYearsOfExperience()}+ Years Working</small>
              </article>

              <article className="about__card">
                <BsStack className="about__icon" />
                <h5>Stack</h5>
                <small>Full Stack</small>
              </article>

              <article className="about__card">
                <RiFolder4Fill className="about__icon" />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
              <div />
          </div>
          <p>
            I am a Full Stack Software Developer with a great flair for Front
            End. I am always looking for ways to improve my skills and achieve
            bigger goals. I love designing engaging and accessible applications
            that give the users the ultimate experience. I am an excellent
            learner, always excited about leveraging advances in software
            development towards crafting tools for intuitive problem-solving.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let’s Have A Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
