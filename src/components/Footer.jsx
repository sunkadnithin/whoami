import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import config from '../data/config.json';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href={config.social.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                </a>
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                </a>
                <a href={`mailto:${config.social.email}`}>
                    <Mail size={20} />
                </a>
            </div>
            <p className="footer-text">
                Designed & Built by Nithin Sunkad
            </p>
        </footer>
    );
};

export default Footer;
