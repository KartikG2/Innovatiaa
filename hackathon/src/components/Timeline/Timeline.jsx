import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  { date: 'Sept 20, 2025', title: 'Registration Opens', desc: 'Teams can register and submit their basic details.' },
  { date: 'Sept 23, 2025', title: 'Registration Closes', desc: 'No new entries after this date.' },
  { date: 'Sept 24, 2026 9.30 AM', title: 'Kickoff & Opening Ceremony', desc: 'Welcome note + Seat allocation' },
  { date: '11 AM', title: 'Coding Begins', desc: 'Teams start working on their projects.' },
  { date: '1 PM', title: 'Mentorship Rounds', desc: 'Mentors interact with teams and provide guidance.' },
  { date: '3.30 PM', title: 'Final Submission', desc: 'Teams must submit their project repositories & pitch decks.' },
  { date: '4 PM', title: 'Demos & Judging', desc: 'Teams present their solutions to judges.' },
  { date: '4.30 PM', title: 'Closing Ceremony & Results', desc: 'Winners announced, closing remarks.' },
];

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2>Hackathon Timeline</h2>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;