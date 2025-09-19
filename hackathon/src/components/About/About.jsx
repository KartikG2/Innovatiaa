import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaUsers, FaBolt } from 'react-icons/fa'; // Importing icons
import './About.css';

// Data for the feature cards
const features = [
  {
    icon: <FaLightbulb />,
    title: 'Innovation First',
    description: 'Bring your wildest ideas to life with cutting-edge technology.',
    highlight: false,
  },
  {
    icon: <FaCode />,
    title: 'Code & Create',
    description: 'Intense coding, designing, and problem-solving.',
    highlight: false,
  },
  {
    icon: <FaUsers />,
    title: 'Team Collaboration',
    description: 'Work with like-minded individuals to build something amazing.',
    highlight: true, // This card will be highlighted
  },
  {
    icon: <FaBolt />,
    title: 'Fast-Paced',
    description: 'High-energy environment with mentorship and guidance.',
    highlight: false,
  },
];

// Data for the differentiator list
const differentiators = [
  'Open to all our college students regardless of experience level',
  'Mentors and experts to guide your journey',
  'Real-world problem statements with practical impact',
  'Amazing networking opportunities and career prospects' 
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Main Intro */}
        <motion.div 
          className="about-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About <span className="highlight-text">INNOVATIAA</span></h2>
          <p>
            INNOVATIAA is not just another hackathon – it's a celebration of creativity, innovation, 
            and the boundless potential of young minds. Join us for intense coding, 
            networking, and bringing revolutionary ideas to life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`feature-card ${feature.highlight ? 'highlighted' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(153, 51, 255, 0.2)' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Differentiator Section */}
        <motion.div 
          className="differentiator-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="differentiator-content">
            <h3>What Makes Us Different?</h3>
            <ul>
              {differentiators.map((point, index) => (
                 <motion.li key={index} custom={index} variants={itemVariants}>
                   {point}
                 </motion.li>
              ))}
            </ul>
          </div>
          <div className="differentiator-visual">
            <FaCode className="visual-icon" />
            <p>Innovation in Action</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;