import React from 'react';
import { motion } from 'framer-motion';
import './Student-Coordinator.css';
import CoOrdinator1 from '../../assets/akshay.jpg';
import CoOrdinator2 from '../../assets/ajith1.jpg';
import CoOrdinator3 from '../../assets/profile-pic.png';
import CoOrdinator4 from '../../assets/hemanth.jpg';
import CoOrdinator5 from '../../assets/VIVEK.jpg';
import CoOrdinator6 from '../../assets/karthikG1.jpg';
import CoOrdinator7 from '../../assets/vishal.jpg';
import CoOrdinator8 from '../../assets/laxmi1.jpg';
import CoOrdinator9 from '../../assets/sinchana.jpg';
import CoOrdinator10 from '../../assets/shravani.jpg';
import CoOrdinator11 from '../../assets/abhishek.jpg';

const Student_CoOrdinatorsData = [
{ name: 'Mr.Akashay', role: '(Core Committee)', img: CoOrdinator1 },
{ name: 'Mr.Ajith', role: '(Core Committee)', img: CoOrdinator2 },
{ name: 'Mr.Kartik I G', role: '(Technical Committee)', img: CoOrdinator3 },
{ name: 'Mr.Vishal', role: '(Technical Committee)', img: CoOrdinator7 },
{ name: 'Mr.Vivek', role: '(Logistics and Venue Committee)', img: CoOrdinator5 },
{ name: 'Mr.Karthik G', role: '(Logistics and Venue Committee)', img: CoOrdinator6 },
{ name: 'Mr.Hemanth R', role: '( Publicity and Outreach Committee)', img: CoOrdinator4 },
{ name: 'Ms.Laxmi', role: '(Publicity and Outreach Committee)', img: CoOrdinator8 },
{ name: 'Ms.Sinchana', role: '(Hospitality and Engagement Committee)', img: CoOrdinator9 },
{ name: 'Ms.Shravani', role: '(Hospitality and Engagement Committee)', img: CoOrdinator10 },
{ name: 'Mr.Abhishek A D', role: '(Registeration and Communication Committee)', img: CoOrdinator11 },
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