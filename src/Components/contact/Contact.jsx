import React from 'react'
import "./Contact.css"
import ContactData from "../../data/ContactData"


const Contact = () => {
  return (
    <section id="contact" className="element contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {ContactData.map((contact, index) => {
            return(
              <article key={index} className="contact__option">
            <span className="contact__icon">{contact.icon}</span>
            <h4>{contact.name}</h4>
            <h5>{contact.address}</h5>
            <a href={contact.link} target="_blank" rel="noreferrer">Send A Message</a>
          </article> 
            )
          })}
          
        </div>
        <form action="https://formspree.io/f/mqknejwk"method="POST">
        <div >
    </div>
      <div class="div-form">
        <label for="name">
          <span>Full Name</span>
          <input type="text" name="name" id="name" autocomplete="name" placeholder="Enter Your Full Name" required/>
        </label>
        <label for="email">
          <span >Email</span>
          <input type="email" name="email" id="email" autocomplete="email" placeholder="Enter Your Email" required/>
        </label>
        <label for="name">
          <span >Message</span>
          <textarea type="text" name="message" id="message" autocomplete="off" rows="7" required placeholder="Your message Please"></textarea>
        </label>
        <button className="btn btn-primary" type="submit">Send Message</button>
      </div>
        </form>
      </div>
    </section>
  )
}

export default Contact