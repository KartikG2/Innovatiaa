import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProblemStatements from './components/ProblemStatements/ProblemStatements';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import Speakers from './components/Patrons/Patrons';
import Organizers from './components/Organizers/Organizers';
import Judges from './components/Judges/Judges';
import CoOrdinators from './components/Co-ordinataors/Co-ordinators';
import Student_CoOrdinators from './components/Student-Coordinators/Student-Coordinator';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProblemStatements />
      <Timeline />
      <Speakers />
      <Organizers />
      <Judges />
      <CoOrdinators />
      <Student_CoOrdinators />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;