import React from 'react';
import './ContactMe.css'
import { FaGithub, FaGoogle, FaLinkedin, FaInstagram } from 'react-icons/fa';


const ContactMe = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="contact-me">
    <div className="contact-title">Don't be a stranger<br/><span>Contact me</span></div>
      <div className="contact-icons">
        <div className="icon" onClick={() => openLink('https://github.com/Kuroo28')}>
          <FaGithub size={60} />
        </div>
        <div className="icon" onClick={() => openLink('https://www.linkedin.com/in/jeth-rivero-2557a8286/')}>
          <FaLinkedin size={60} />
        </div>
        <div className="icon" onClick={() => openLink('mailto:riverojethro28@gmail.com')}>
          <FaGoogle size={60} />
        </div>
        <div className="icon" onClick={() => openLink('https://www.instagram.com/jeth_rivero/')}>
          <FaInstagram size={60} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
