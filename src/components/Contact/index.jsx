import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact__section" id="contact">
      <div className="contact__title">
        <span>Contact</span>
      </div>
      <div className="contact__list">
        <a href="https://github.com/danyouknowme" target="_blank" rel="noreferrer" className="contact__item">
          <i class="nes-icon github is-large"></i>
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/thanathip-suwannakhot-0787bb210" target="_blank" rel="noreferrer" className="contact__item">
          <i class="nes-icon linkedin is-large"></i>
          <span>Linkedin</span>
        </a>
        <a href="mailto:thanathip.suw@gmail.com" target="_blank" rel="noreferrer" className="contact__item">
          <i class="nes-icon gmail is-large"></i>
          <span>Email</span>
        </a>
        <a href="https://www.facebook.com/dan.isreal.923" target="_blank" rel="noreferrer" className="contact__item">
          <i class="nes-icon facebook is-large"></i>
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/danthanathip" target="_blank" rel="noreferrer" className="contact__item">
          <i class="nes-icon instagram is-large"></i>
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
