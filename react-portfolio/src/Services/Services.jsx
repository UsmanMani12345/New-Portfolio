import React from 'react'
import  './Services.css'
import Image1 from '../images/card-img.png';
const Services = () => {
  return (
    <>
    
    <div className="container-fluid services" id="services">

    <div className="services-heading">
        <h1>Services</h1>
        <span>What I Provided</span>
    </div>


    <div className="services-card">
        <div className="card-content">
            <img src={Image1} alt="" />
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate impedit reprehenderit iusto inventore repellat voluptates. Neque cupiditate ipsa excepturi et molestias dolorum dolore quam esse dicta saepe veniam illo fuga sed, enim dolor explicabo ducimus libero deserunt eligendi harum.</p>
        </div>


        <div className="card-content">
            <img src={Image1} alt="" />
        
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate impedit reprehenderit iusto inventore repellat voluptates. Neque cupiditate ipsa excepturi et molestias dolorum dolore quam esse dicta saepe veniam illo fuga sed, enim dolor explicabo ducimus libero deserunt eligendi harum.</p>
        </div>


        <div className="card-content">
            <img src={Image1} alt="" />
        
            <h3>Frontend Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate impedit reprehenderit iusto inventore repellat voluptates. Neque cupiditate ipsa excepturi et molestias dolorum dolore quam esse dicta saepe veniam illo fuga sed, enim dolor explicabo ducimus libero deserunt eligendi harum.</p>
        </div>
    </div>


    </div>
    
    
    
    
    </>
  )
}

export default Services