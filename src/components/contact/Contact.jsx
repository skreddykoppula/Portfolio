import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <article className="contact__option text-center">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>skreddy.koppula@gmail.com</h5>
              <a href="mailto:skreddy.koppula@gmail.com">Send a message</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
