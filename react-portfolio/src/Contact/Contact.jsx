import React from 'react'
import './Contact.css'
import Image1 from '../images/side-img.png';

const Contact = () => {
  return (
    <>
    <div className="contact container-fluid" id="contact">
        <div className="contact-heading">
            <h2>Get in Touch</h2>
            <span>We Are Available</span>
        </div>

        <div className="contact-area">
            <div className="contact-img">
                <img src={Image1} alt="" />
            </div>

            <div className="contact-form">
                <h1>Contact<span>U</span>s</h1>
                <form action="">
                    <div className='input-label'>
                    
                    <input type="text" placeholder='Name' />
                    </div>

                    <div>
                    
                    <input type="email" placeholder='Email' />
                    </div>

                    <div>
                        <textarea name="message" placeholder='Message'></textarea>
                    </div>
                    <a href="">Submit</a>
                </form>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Contact