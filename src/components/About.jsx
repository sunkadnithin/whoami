import React from 'react';
import resume from '../data/resume.json';
import '../styles/About.css';

const About = () => {
    const { summary } = resume.personalInfo;
    const { skills } = resume;

    // Flatten skills for display or use categories
    const skillList = [
        ...skills.languages,
        ...skills.frameworks,
        ...skills.webTechnologies
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="heading">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! My name is Nithin and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is a lot of fun!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an <a href="#">advertising agency</a>, a <a href="#">start-up</a>, a <a href="#">huge corporation</a>, and a <a href="#">student-led design studio</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href="#">Upstatement</a> for a variety of clients.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="skills-list">
                            {skillList.slice(0, 8).map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-img">
                        <div className="img-wrapper">
                            {/* Placeholder for profile image */}
                            <div className="img-placeholder">NS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
