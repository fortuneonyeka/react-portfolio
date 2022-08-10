import React from "react";
import "./Contact.css";
import ContactData from "../../data/ContactData";

import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqknejwk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  return (
    <section id="contact" className="element contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {ContactData.map((contact, index) => {
            return (
              <article key={index} className="contact__option">
                <span className="contact__icon">{contact.icon}</span>
                <h4>{contact.name}</h4>
                <h5>{contact.address}</h5>
                <a href={contact.link} target="_blank" rel="noreferrer">
                  Send A Message
                </a>
              </article>
            );
          })}
        </div>
        
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              placeholder="Enter Your Full Name"
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Enter Your Email"
              required
            />
              <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <textarea
              type="text"
              name="message"
              id="message"
              autocomplete="off"
              rows="7"
              required
              placeholder="Your message Please"
            />
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
         
        <a href="#header" className="scroll__up">Back To Top</a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
