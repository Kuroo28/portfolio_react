import React from 'react'
import "./Hero.css"
import heroImg from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <p>
                Hi there!, Welcome to my creative world! I'm <span>Jeth</span> a Web <span>Developer</span> passionate about building websites.
            </p>
        </div>
        <div className='hero-image'>
            <div className='background'>
            </div>
            <img src={heroImg} alt='hero-img'/>
        </div>
    </div>
  )
}

export default Hero