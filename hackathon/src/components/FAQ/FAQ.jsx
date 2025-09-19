import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const faqData = [
  { q: "Who can participate?", a: "The hackathon is open to all college students across departments." },
  { q: "How many members are allowed per team?", a: "Each team can have max of 6 members." },
  { q: "Is there any registration fee?", a: "No, participation is completely free." },
  { q: "Do we need to work on our own problem statement?", a: "No, problem statemnets will be provided on this website." },
  { q: "What is the judging criteria?", a: "Projects will be judged based on innovation, impact, feasibility, and presentation." },
  { q: "What do winners get?", a: "Huge ShoutOuts over internet and Participation certificate along with some goodies." },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="faq-item"
      layout
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div className="faq-question" layout>
        {question}
        {isOpen ? <FaMinus /> : <FaPlus />}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const FAQ = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <AccordionItem key={index} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;