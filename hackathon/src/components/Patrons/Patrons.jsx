import React from 'react';
import { motion } from 'framer-motion';
import './Patrons.css';
import Patron1 from '../../assets/chairman.png';
import Patron2 from '../../assets/empty.png';
import Patron3 from '../../assets/empty.png';

const PatronsData = [
  { name: 'Shri D.C. Venugopal', title: "Hon'ble Chairman, Dr.SMCE", img: Patron1 },
  { name: 'Dr.K.S.Jagadeesh Gowda', title: 'Principal, Dr.SMCE', img: Patron2 },
  { name: 'Mr Rahul', title: 'CEO, Dr.SMCE', img: Patron3 }
];

// Animation variants for container and items
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Patrons = () => {
  return (
    <section id="Patrons" className="Patrons-section">
      <div className="container">
        <h2>CHIEF-PATRONS</h2>
        <motion.div
          className="Patrons-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is visible
        >
          {PatronsData.map((Patron, index) => (
            <motion.div
              key={index}
              className="Patron-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            >
              <img src={Patron.img} alt={Patron.name} className="Patron-img" />
              <h3>{Patron.name}</h3>
              <p>{Patron.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Patrons;