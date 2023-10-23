import React from 'react';
import  '../Services/Services.css';
import Image1 from '../images/html.svg';
import Image2 from '../images/css.svg';
import Image3 from '../images/jquery.svg';
import Image4 from '../images/bootstrap.svg';
import Image5 from '../images/javascript.svg';
import Image6 from '../images/laravel.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Skills = () => {
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
      


{/* Cards here  */}




<div className="container-fluid p-3">
  <div className="row p-3">
    <div className="col-md-4">
    <div className="card-content">
            <img src={Image1} alt="" />
        
            <h3>Frontend Development</h3>
            <p>I'M Frontend Developer I use the HTML5 CSS3 JAVASCRIPT Reactjs Bootstrap</p>
            <button className='btn btn-dark text-white'>Hire Me</button>
        </div>


    </div>
    <div className="col-md-4">
    <div className="card-content">
            <img src={Image2} alt="" />
        
            <h3>Frontend Development</h3>
            <p>I'M Frontend Developer I use the HTML5 CSS3 JAVASCRIPT Reactjs Bootstrap</p>
            <button className='btn btn-dark text-white'>Hire Me</button>
        </div>
    </div>
    <div className="col-md-4">
    <div className="card-content">
            <img src={Image3} alt="" />
        
            <h3>Frontend Development</h3>
            <p>I'M Frontend Developer I use the HTML5 CSS3 JAVASCRIPT Reactjs Bootstrap</p>
            <button className='btn btn-dark text-white'>Hire Me</button>
        </div>
    </div>


  </div>

  <div className="row p-3">
    <div className="col-md-4">
    <div className="card-content">
            <img src={Image4} alt="" />
        
            <h3>Frontend Development</h3>
            <p>I'M Frontend Developer I use the HTML5 CSS3 JAVASCRIPT Reactjs Bootstrap</p>
            <button className='btn btn-dark text-white'>Hire Me</button>
        </div>


    </div>
    <div className="col-md-4">
    <div className="card-content">
            <img src={Image5} alt="" />
        
            <h3>Frontend Development</h3>
            <p>I'M Frontend Developer I use the HTML5 CSS3 JAVASCRIPT Reactjs Bootstrap</p>
            <button className='btn btn-dark text-white'>Hire Me</button>
        </div>
    </div>
    <div className="col-md-4">
    <div className="card-content">
            <img src={Image6} alt="" />
        
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

export default Skills