import React from 'react';
import About from '../About/About';
import './About.css';
import  '../Services/Services.css';
import Image1 from '../images/card-img.png';


import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Aboutus = () => {
  return (
    <>
    <div className="container-fluid">

    <div className="navbar container-fluid">
          <a href="#portfolio" className="porfolio" >
            Port<span>fo</span>lio<span>.</span>
          </a>
          <div className="nav-link">
            
              <div>
                
                <Link to="/">Home</Link>
                <Link to="/aboutus">AboutUs</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/ourservices">Services</Link>
                <Link to="/contactus">Contact</Link>
                


              </div>
            
          </div>
          
        </div>
      <About/>


{/* Cards here  */}




<div class="container-fluid p-3">
  <div class="row">
    <div class="col-md-4">
    <div className="card-content">
            <img src={Image1} alt="" />
        
            <h3>Frontend Development</h3>
            <p>I'M Frontend Developer I use the HTML5 CSS3 JAVASCRIPT Reactjs Bootstrap</p>
            <button className='btn btn-dark text-white'>Hire Me</button>
        </div>


    </div>
    <div class="col-md-4">
    <div className="card-content">
            <img src={Image1} alt="" />
        
            <h3>Frontend Development</h3>
            <p>I'M Frontend Developer I use the HTML5 CSS3 JAVASCRIPT Reactjs Bootstrap</p>
            <button className='btn btn-dark text-white'>Hire Me</button>
        </div>
    </div>
    <div class="col-md-4">
    <div className="card-content">
            <img src={Image1} alt="" />
        
            <h3>Frontend Development</h3>
            <p>I'M Frontend Developer I use the HTML5 CSS3 JAVASCRIPT Reactjs Bootstrap</p>
            <button className='btn btn-dark text-white'>Hire Me</button>
        </div>
    </div>


  </div>
</div>







      <Footer />
    </div>
    
    
    </>
  )
}

export default Aboutus