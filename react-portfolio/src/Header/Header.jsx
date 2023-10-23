import React, { useState } from 'react';
import './Header.css';
import Typewriter from 'typewriter-effect';
import Image1 from '../images/img1.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="container-fluid header">
        <div className="navbar container-fluid">
          <a href="#portfolio" className={`porfolio ${showNavbar ? 'hidden' : ''}`}>
            Port<span>fo</span>lio<span>.</span>
          </a>
          <div className={`nav-link ${showNavbar ? 'show' : ''}`}>
            {showNavbar && (
              <div>
                <a href="#about">Home</a>

                <Link to="/aboutus">AboutUs</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/ourservices">Services</Link>
                <Link to="/contactus">Contact</Link>
                


              </div>
            )}
          </div>
          <button className="toggle-button" onClick={toggleNavbar}>
            {showNavbar ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="header-content">
          <div className="heading-para">
            <span>Hello I'M</span>
            <h1>Muhammad Usman Jamil</h1>
            <p>I'M</p>
            <h2>
              <Typewriter
                options={{
                  strings: ['Frontend Developer', 'ReactJs', 'HTML5', 'CSS3', ''],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>

          <div className="heading-image">
            <img src={Image1} alt="image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
