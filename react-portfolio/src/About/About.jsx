import React from 'react';
import './About.css';
import Image1 from '../images/img2.png';
const About = () => {
  return (
    <>
    
    <div className="about container-fluid" id="about">
        <div className="about-heading">
            <h2>About Me</h2>
            <span>Who I Am?</span>
        </div>

        <div className="about-content">


            <div className="about-me">
                <h2>Hello,I'M Frontend <span> Deverloper </span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio numquam odio doloremque vel ex cupiditate, harum quia iste repellat dolores nam pariatur sapiente exercitationem consequatur eius nihil doloribus explicabo, iusto quo adipisci facilis? Nisi voluptatum, quo unde tenetur ex nesciunt asperiores accusamus, ullam consequuntur eaque est eum nostrum alias officia!</p>
                <a href="#CV">Download CV</a>
            </div>
            <div className="about-image">
            <img src={Image1} alt="image" />
          </div>
 

        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default About