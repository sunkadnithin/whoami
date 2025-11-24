import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import config from '../data/config.json';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                Designed & Built by Nithin Sunkad
            </p>
        </footer>
    );
};

export default Footer;
