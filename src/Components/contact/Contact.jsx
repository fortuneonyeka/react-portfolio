import React from 'react'
import "./Contact.css"
import ContactData from "../../data/ContactData"


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {ContactData.map((contact, index) => {
            return(
              <article key={index} className="contact_option">
            {contact.icon}
            <h4>{contact.name}</h4>
            <h5>{contact.address}</h5>
            <a href={contact.link} target="_blank" rel="noreferrer">Send A Message</a>
          </article> 
            )
          })}
          
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact