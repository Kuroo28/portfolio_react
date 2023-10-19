import React from 'react'
import "./AboutMe.css"
import aboutMe from "../assets/about-img.png"

const AboutMe = () => {
  return (
    <div className='AboutMe-container'>
        <div className='AboutMe-image'>
            <img src={aboutMe} alt='AboutMe-img'/>
            <div className='background'></div>
        </div>
        <div className='AboutMe-text'>
            <p>
                Hi there!, Welcome to my creative world! I'm <span>Jeth</span> a Web <span>Developer</span> passionate about building websites.
            </p>
        </div>
    </div>
  )
}

export default AboutMe