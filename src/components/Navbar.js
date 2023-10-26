import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import { Link } from 'react-scroll';

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
                  <Link to='home' smooth={true} duration={500}>Home</Link>
              </li>
              <li className='nav-items'>
                <Link to='about' smooth={true} duration={500}>About</Link>
              </li>
              <li className='nav-items'>
                  <Link to='skills' smooth={true} duration={500}>Skills</Link>
              </li>
              <li className='nav-items'>
                  <Link to='projects' smooth={true} duration={500}>Projects</Link>
              </li>
              <li className='nav-items'>
                  <Link to='contact' smooth={true} duration={500}>Contact</Link>
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