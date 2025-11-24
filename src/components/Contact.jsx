import React from 'react';
import config from '../data/config.json';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <p className="contact-overline">04. What's Next?</p>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">
                    Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href={`mailto:${config.social.email}`} className="btn contact-btn">
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
