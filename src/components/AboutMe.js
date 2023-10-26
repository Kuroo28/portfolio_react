import React from 'react';
import './AboutMe.css';
import aboutMeImage from '../assets/about-img.png';

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <div className='about-me-image'>
        <div className='circular-background'>
          <img src={aboutMeImage} alt='My Image' />
        </div>
      </div>
      <div className='about-me-text'>
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with a strong commitment to creating
          stunning and functional websites. With a keen eye for design and a
          love for coding, I bring creative ideas to life on the web.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
