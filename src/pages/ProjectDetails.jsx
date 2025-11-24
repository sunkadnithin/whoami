import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Lock, Calendar, Tag } from 'lucide-react';
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
            <div className="container">
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

                <div className="project-content">
                    <div className="project-main">
                        <div
                            className="project-body"
                            dangerouslySetInnerHTML={{ __html: project.details }}
                        />
                    </div>

                    <div className="project-sidebar">
                        <div className="sidebar-card">
                            <h3>Tech Stack</h3>
                            <div className="tech-tags-large">
                                {/* Fallback tags if not in JSON, ideally should be in JSON */}
                                <span className="tag-large">.NET</span>
                                <span className="tag-large">C#</span>
                                <span className="tag-large">Backend</span>
                            </div>
                        </div>

                        {project.link && project.link !== '#' && (
                            <div className="sidebar-card">
                                <h3>Links</h3>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                                    <Github size={20} /> View Source
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
