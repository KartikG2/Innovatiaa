import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='Footer' className="footer">
      <div className="container footer-container">
        <div className="footer-contact">
          <h3>Organizer</h3>
          <p>Email: shashanka.hp@gmail.com</p>
          <p>Phone: +91 9743438282</p>
        </div>
        <div className="footer-socials">
          <h3>Student Co-ordinator</h3>
          {/* <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div> */}
          <p>Email - kartikgangavati2004@gmail.com</p>
          <p>Phone - +91 9986472841</p>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Innovatiaa. All Rights Reserved.</p>
         <span className="footer-credit"> Made with ❤️ by Kartik</span>
      </div>
    </footer>
  );
};

export default Footer;