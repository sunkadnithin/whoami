import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import resume from '../data/resume.json';
import '../styles/Certifications.css';

const Certifications = () => {
    const { certifications } = resume;

    return (
        <section id="certifications" className="section certifications-section">
            <div className="container">
                <h2 className="heading">Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="cert-icon">
                                <Award size={32} color="var(--color-accent)" />
                            </div>
                            <div className="cert-content">
                                <h3 className="cert-name">{cert.name}</h3>
                                <p className="cert-issuer">{cert.issuer} | {cert.date}</p>
                                {cert.link && cert.link !== '#' && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-link"
                                    >
                                        View Certificate <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
