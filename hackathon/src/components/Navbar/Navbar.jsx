import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'problems', label: 'Tracks' }, 
    { to: 'timeline', label: 'Timeline' },
    { to: 'Patrons', label: 'Chief-Patrons' },
    { to: 'faq', label: 'FAQ' },
    { to: 'Footer', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="hero" smooth={true} duration={500} className="navbar-logo">
          Innovatiaa
        </Link> 
        <div className="menu-icon" onClick={toggleNav}>
          {isNavVisible ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isNavVisible ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="nav-links"
                onClick={isNavVisible ? toggleNav : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;