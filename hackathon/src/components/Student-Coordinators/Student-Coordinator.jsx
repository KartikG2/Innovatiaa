import React from 'react';
import { motion } from 'framer-motion';
import './Student-Coordinator.css';
import CoOrdinator1 from '../../assets/empty.png';
import CoOrdinator2 from '../../assets/empty.png';
import CoOrdinator3 from '../../assets/profile-pic.png';
import CoOrdinator4 from '../../assets/empty.png';
import CoOrdinator5 from '../../assets/empty.png';
import CoOrdinator6 from '../../assets/karthikG.jpg';
import CoOrdinator7 from '../../assets/empty.png';
import CoOrdinator8 from '../../assets/empty.png';

const Student_CoOrdinatorsData = [
{ name: 'Akashay', role: 'Final year Student', img: CoOrdinator1 },
{ name: 'Ajith', role: 'Final year Student', img: CoOrdinator2 },
{ name: 'Kartik I G', role: 'Final year Student', img: CoOrdinator3 },
{ name: 'Hemanth C S', role: 'Final year Student', img: CoOrdinator4 },
{ name: 'Vivek', role: 'Final year Student', img: CoOrdinator5 },
{ name: 'Karthik G', role: 'Final year Student', img: CoOrdinator6 },
{ name: 'Gagan', role: 'Final year Student', img: CoOrdinator7 },
{ name: 'Laxmi', role: 'Third year Student', img: CoOrdinator8 },
];

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

const Student_CoOrdinators = () => {
    return (
        <section id="Student_CoOrdinators" className="Student_CoOrdinators-section">
            <div className="container">
                <h2>Student Co-Ordinators</h2>
                <motion.div
                    className="Student_CoOrdinators-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {Student_CoOrdinatorsData.map((Student_CoOrdinator, index) => (
                        <motion.div
                            key={index}
                            className="Student_CoOrdinator-card"
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: '0 5px 25px rgba(153, 51, 255, 0.3)' }}
                        >
                            <img src={Student_CoOrdinator.img} alt={Student_CoOrdinator.name} className="Student_CoOrdinator-img" />
                            <h3>{Student_CoOrdinator.name}</h3>
                            <p>{Student_CoOrdinator.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Student_CoOrdinators;