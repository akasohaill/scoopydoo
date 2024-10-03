import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <p>&copy; {new Date().getFullYear()} Scooby.com. All rights reserved.</p>
        <div className='footer-links'>
          <a href='/about'>About Us</a>
          <a href='/contact'>Contact</a>
          <a href='/privacy'>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
