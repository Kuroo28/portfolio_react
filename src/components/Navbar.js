import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"

const Navbar = () => {

    const downloadCV = () => {
        const cvURL = "/my_cv.pdf";
        const link = document.createElement("a");
        link.href = cvURL;
        link.download = "my_cv.pdf";
        link.click();
      };
  return (
    <>

        <nav className='navbar'>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
          <ul className='nav-list'>
              <li className='nav-items'>
                  <a href='/'>Home</a>
              </li>
              <li className='nav-items'>
                  <a href='/about'>About</a>
              </li>
              <li className='nav-items'>
                  <a href='/projects'>Projects</a>
              </li>
              <li className='nav-items'>
                  <a href='/contact'>Contact</a>
              </li>
              <li>
              <button className="download-button" onClick={downloadCV}>
              Download CV
          </button>
              </li>
          </ul>

      </nav>
    </>
  )
}

export default Navbar