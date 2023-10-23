import React from 'react';
import './Footer.css';

import { FaGithub, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div class="container-fluid footer">
      <h1>ALL RESEVERD RIGHT IS HERE!</h1>
        <span><FaGithub className='icons'/></span>
        <span><FaYoutube className='icons'/></span>
        <span><FaTwitter className='icons'/></span>
        <span><FaFacebook className='icons'/></span>

    </div>
    
    
    </>
  )
}

export default Footer