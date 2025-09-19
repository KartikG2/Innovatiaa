import React from 'react';
import { motion } from 'framer-motion';
// 1. Import new icons for the new problem statements
import {
  FaChartBar, FaEdit, FaTasks, FaShoppingCart, FaLanguage,
  FaQuestionCircle, FaUserCircle, FaFilm, FaCalculator, FaMobileAlt
} from 'react-icons/fa';
import './ProblemStatements.css';

// 2. Replace the old data with the new list of problem statements
const statements = [
  {
    icon: <FaChartBar />,
    title: 'Data Visualization Dashboard',
    description: 'Build a responsive data visualization dashboard using a public API and display insights with interactive charts.',
    tag: 'Data',
  },
  {
    icon: <FaEdit />,
    title: 'Drag-and-Drop Form Builder',
    description: 'Design a drag-and-drop form builder that allows users to create, preview, and export custom forms.',
    tag: 'UI/UX',
  },
  {
    icon: <FaTasks />,
    title: 'Offline-First Task Manager',
    description: 'Develop a task manager with categories, drag-and-drop prioritization, and offline persistence.',
    tag: 'Productivity',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce Product Gallery',
    description: 'Create a responsive e-commerce product gallery with powerful search, sorting, and filtering options.',
    tag: 'E-commerce',
  },
  {
    icon: <FaLanguage />,
    title: 'Multilingual Web App',
    description: 'Implement a multilingual web app where users can dynamically switch between multiple languages on the fly.',
    tag: 'Web App',
  },
  {
    icon: <FaQuestionCircle />,
    title: 'Online Quiz Platform',
    description: 'Build an online quiz platform with timers, multiple question types, and a results summary dashboard.',
    tag: 'Education',
  },
  {
    icon: <FaUserCircle />,
    title: 'Portfolio Generator',
    description: 'Create a portfolio generator that allows users to enter details and preview/download a personal website.',
    tag: 'Creative Tool',
  },
  {
    icon: <FaFilm />,
    title: 'Movie & Book Explorer',
    description: 'Develop a movie or book explorer using a public API with search, filters, and a persistent favorites list.',
    tag: 'API',
  },
  {
    icon: <FaCalculator />,
    title: 'Expense Splitter App',
    description: 'Design an expense splitter app that calculates balances between users and displays results with insightful charts.',
    tag: 'Utility',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Note-Taking PWA',
    description: 'Build a Progressive Web App (PWA) for note-taking with offline support and automatic data sync when online.',
    tag: 'PWA',
  },
];


// Animation Variants (No changes needed here)
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }, // Slightly faster stagger for more items
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// The rest of the component's structure remains the same
const ProblemStatements = () => {
  return (
    <section id="problems" className="problems-section">
      <div className="container">
        <h2>Problem Statements</h2>
        <motion.div
          className="problems-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation sooner
        >
          {statements.map((stmt, index) => (
            <motion.div
              key={index}
              className="problem-card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 12px  30px rgba(0,0,0,0.5)',
                borderColor: 'var(--color-primary)'
              }}
            >
              <div className="card-header">
                <div className="card-icon">{stmt.icon}</div>
                <div className="card-tag">{stmt.tag}</div>
              </div>
              <h3>{stmt.title}</h3>
              <p>{stmt.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatements;