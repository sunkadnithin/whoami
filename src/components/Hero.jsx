import React from 'react';
import resume from '../data/resume.json';
import '../styles/Hero.css';

const Hero = () => {
    const { name, title, summary } = resume.personalInfo;

    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <h1 className="hero-greeting">Hi, my name is</h1>
                <h2 className="hero-name">{name}.</h2>
                <h3 className="hero-title">I engineer robust backend systems.</h3>
                <p className="hero-description">
                    I'm a {title} based in Bengaluru, specializing in designing scalable architecture and efficient APIs. Currently, I'm focused on building accessible, human-centered products at Sharp Software Development India.
                </p>
                <a href="mailto:sunkadnithin@gmail.com" className="btn hero-btn">
                    Get In Touch
                </a>
            </div>
        </section>
    );
};

export default Hero;
