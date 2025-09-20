import React from 'react';
import { motion } from 'framer-motion';
import './Organizers.css';
import organizer1 from '../../assets/csehod.png';
import organizer2 from '../../assets/empty.png';

const organizersData = [
  { name: 'Dr Renukaradhya P C ', role: 'Professor & HOD - CSE', img: organizer1 },
  { name: 'Prof. Rakesh D S', role: 'HOD - ISE', img: organizer2 },
];

// Re-usable animation variants
const containerVariants = {
  hidden: {}, 
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    },
  },
};

const Organizers = () => {
    return (
        <section id="organizers" className="organizers-section">
            <div className="container">
                <h2>Organizing Committee</h2>
                <motion.div 
                  className="organizers-grid"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                    {organizersData.map((organizer, index) => (
                        <motion.div 
                          key={index} 
                          className="organizer-card"
                          variants={itemVariants}
                          whileHover={{ y: -8, boxShadow: '0 5px 25px rgba(153, 51, 255, 0.3)' }}
                        >
                            <img src={organizer.img} alt={organizer.name} className="organizer-img" />
                            <h3>{organizer.name}</h3>
                            <p>{organizer.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Organizers;