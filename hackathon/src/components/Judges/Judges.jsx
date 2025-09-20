import React from 'react';
import { motion } from 'framer-motion';
import './Judges.css';
import Judge1 from '../../assets/malashri.png';
import Judge2 from '../../assets/empty.png';
import Judge3 from '../../assets/empty.png';

const JudgesData = [

  { name: 'Dr.Narayanappa', role: 'Professor and HOD, EEE Dept', img: Judge2 },
  { name: 'Dr.Chandrakumar', role: 'Professor and HOD, ME Dept', img: Judge3 },
    { name: 'Prof.Malashree.G', role: 'Professor and HOD, ECE Dept', img: Judge1 }
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

const Judges = () => {
    return (
        <section id="Judges" className="Judges-section">
            <div className="container">
                <h2>Judges</h2>
                <motion.div 
                  className="Judges-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: false, amount: 0.05 }}
                >
                    {JudgesData.map((Judge, index) => (
                        <motion.div 
                          key={index} 
                          className="Judge-card"
                          variants={itemVariants}
                          whileHover={{ y: -8, boxShadow: '0 5px 25px rgba(153, 51, 255, 0.3)' }}
                        >
                            <img src={Judge.img} alt={Judge.name} className="Judge-img" />
                            <h3>{Judge.name}</h3>
                            <p>{Judge.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Judges;