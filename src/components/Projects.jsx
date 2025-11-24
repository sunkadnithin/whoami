import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import resume from '../data/resume.json';
import '../styles/Projects.css';

const Projects = () => {
    const { projects } = resume;

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="heading">Some Things I've Built</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-top">
                                <div className="folder-icon">
                                    <Folder size={40} color="var(--color-accent)" />
                                </div>
                                <div className="project-links">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                            <ul className="project-tech-list">
                                {/* Placeholder tech stack since resume didn't map tech to projects specifically */}
                                <li>.NET</li>
                                <li>C#</li>
                                <li>React</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
