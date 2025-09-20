import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa'; // Import icons
import { Link as ScrollLink } from 'react-scroll'; // For "Learn More" scroll
import './Hero.css';
import smceLogo from '../../assets/smce-logo.png'; // Import the logo image
const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
         <motion.div
          className="presenter-container"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          <img
            src={ smceLogo}
            alt="Dr. SMCE Logo"
            className="smce-logo"
          />
          <p className="presenter-text">Dr. SMCE presents</p>
        </motion.div>
        <div>
          <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          INNOVATIAA
          
        </motion.h1>
         <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-tagline-p"
        >
          Hackathon-1.0
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-tagline"
        >
          In association with CSE & ISE Departments
        </motion.p>
        </div>

        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-tagline"
        >
          Where Innovation Meets Creativity - The Ultimate College Hackathon Experience
        </motion.p>

        <motion.div
          className="event-details"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span><FaCalendarAlt /> Sept 24 2025</span>
          <span><FaMapMarkerAlt /> College Campus</span>
          <span><FaTrophy /> Amazing ShoutOuts</span>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="https://forms.gle/99Y3kuJCndKjmHwT9" // Replace with actual Google Form link
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--color-accent)' }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </a>
          <ScrollLink
            to="about" // Scrolls to the About section
            smooth={true}
            duration={500}
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </ScrollLink>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="stat-item">
            <span>1</span>
            <p>Day</p>
          </div>
          <div className="stat-item">
            <span>100%</span>
            <p>Learning</p>
          </div>
          <div className="stat-item">
            <span>∞</span>
            <p>Ideas</p>
          </div>
        </motion.div>
      </div>
      <div className="animated-bg"></div>
    </section>
  );
};

export default Hero;