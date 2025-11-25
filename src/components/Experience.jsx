import React, { useState } from 'react';
import resume from '../data/resume.json';
import '../styles/Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { experience } = resume;

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="heading">Where I've Worked</h2>
                <div className="experience-inner">
                    <div className="experience-tabs">
                        {experience.map((job, index) => (
                            <button
                                key={index}
                                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {job.company.split(' ')[0]}
                            </button>
                        ))}
                    </div>
                    <div className="experience-content">
                        <div className="job-title">
                            <span>{experience[activeTab].role}</span>
                            <span className="company">
                                &nbsp;@&nbsp;
                                <a href="https://www.sharp.co.in/" className="company-link">
                                    {experience[activeTab].company}
                                </a>
                            </span>
                        </div>
                        <div className="job-range">{experience[activeTab].period}</div>
                        <ul className="job-list">
                            {experience[activeTab].description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
