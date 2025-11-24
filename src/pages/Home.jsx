import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
        </main>
    );
};

export default Home;
