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
                            Hello! My name is Nithin and I enjoy engineering the logic that powers. My interest in development started when I realized I loved solving complex problems and optimizing data flow!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at <a href="#">Sharp Software Development India</a>, contributing to enterprise-level SDKs and simulators. My main focus these days is building reliable, scalable backend solutions using .NET.
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
