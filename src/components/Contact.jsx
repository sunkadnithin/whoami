import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import config from '../data/config.json';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <p className="contact-overline">04. What's Next?</p>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">
                    I'm always open to discussing new opportunities, interesting projects, or just chatting about technology. Whether you have a question or just want to say hi, my inbox is open!
                </p>

                <div className="social-links-large">
                    <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="social-icon-large">
                        <Github size={32} />
                        <span>GitHub</span>
                    </a>
                    <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-large">
                        <Linkedin size={32} />
                        <span>LinkedIn</span>
                    </a>
                    <a href={`mailto:${config.social.email}`} className="social-icon-large">
                        <Mail size={32} />
                        <span>Email</span>
                    </a>
                </div>

                <a href={`mailto:${config.social.email}`} className="btn contact-btn">
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
