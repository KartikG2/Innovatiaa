import React from 'react';
import { motion } from 'framer-motion';
import './Co-ordinators.css';
import CoOrdinator1 from '../../assets/Shashank.jpg';
import CoOrdinator2 from '../../assets/Rohan sir.jpg';

const CoOrdiantorsData = [
  { name: 'Shashank', role: 'Assistant Professor', img: CoOrdinator1 },
  { name: 'Rohan S', role: 'Assistant Professor', img: CoOrdinator2 }
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

const CoOrdinators = () => {
    return (
        <section id="CoOrdinators" className="CoOrdinators-section">
            <div className="container">
                <h2>Co-Ordinators</h2>
                <motion.div 
                  className="CoOrdinators-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: false, amount: 0.05 }}
                >
                    {CoOrdiantorsData.map((CoOrdinator, index) => (
                        <motion.div 
                          key={index} 
                          className="CoOrdinator-card"
                          variants={itemVariants}
                          whileHover={{ y: -8, boxShadow: '0 5px 25px rgba(153, 51, 255, 0.3)' }}
                        >
                            <img src={CoOrdinator.img} alt={CoOrdinator.name} className="CoOrdinator-img" />
                            <h3>{CoOrdinator.name}</h3>
                            <p>{CoOrdinator.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoOrdinators;