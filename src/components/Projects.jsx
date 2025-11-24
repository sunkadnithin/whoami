import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Rocket, Lock, ArrowRight } from 'lucide-react';
import resume from '../data/resume.json';
import '../styles/Projects.css';

const Projects = () => {
    const { projects } = resume;
    const navigate = useNavigate();

    const handleProjectClick = (project) => {
        // Navigate to project details page
        if (project.id) {
            navigate(`/project/${project.id}`);
        }
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="heading">Some Things I've Built</h2>
                <div className="projects-container">
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card"
                                onClick={() => handleProjectClick(project)}
                            >
                                <div className="project-top">
                                    <div className="folder-icon">
                                        <Rocket size={40} color="var(--color-accent)" />
                                    </div>
                                    <div className="project-links">
                                        {project.type === 'personal' && project.link ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                title="View Source on GitHub"
                                            >
                                                <Github size={20} />
                                            </a>
                                        ) : (
                                            <div className="office-badge" title="Office Project (Private)">
                                                <Lock size={18} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-description">
                                    <p>{project.description}</p>
                                </div>
                                <div className="project-footer">
                                    <ul className="project-tech-list">
                                        {project.tech && project.tech.slice(0, 3).map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                    <span className="learn-more">
                                        Learn more <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
