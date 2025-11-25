import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Lock, CheckCircle } from 'lucide-react';
import resume from '../data/resume.json';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = resume.projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="container section">
                <h2>Project not found</h2>
                <Link to="/" className="btn">Go Home</Link>
            </div>
        );
    }

    return (
        <div className="project-details-page">
            <div className="container project-container-centered">
                <Link to="/#projects" className="back-link">
                    <ArrowLeft size={20} /> Back to Projects
                </Link>

                <header className="project-header">
                    <h1 className="project-title-large">{project.title}</h1>
                    <div className="project-meta">
                        <span className="meta-item">
                            {project.type === 'office' ? <Lock size={16} /> : <Github size={16} />}
                            {project.type === 'office' ? 'Office Project' : 'Personal Project'}
                        </span>
                    </div>
                </header>

                <div className="project-content-single">
                    <div className="project-section">
                        <h3 className="section-title">Brief</h3>
                        <p className="project-brief">{project.description}</p>
                    </div>

                    <div className="project-section">
                        <h3 className="section-title">Details</h3>
                        <div className="project-body" dangerouslySetInnerHTML={{ __html: project.details }} />
                    </div>

                    {project.highlights && (
                        <div className="project-section">
                            <h3 className="section-title">Key Highlights</h3>
                            <ul className="highlights-list">
                                {project.highlights.map((highlight, index) => (
                                    <li key={index}>
                                        <CheckCircle size={18} className="highlight-icon" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="project-section">
                        <h3 className="section-title">Tech Stack</h3>
                        <div className="tech-tags-large">
                            {project.tech && project.tech.map((tech, index) => (
                                <span key={index} className="tag-large">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {project.link && project.link !== '#' && (
                        <div className="project-section">
                            <h3 className="section-title">Links</h3>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                                <Github size={20} /> View Source
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
