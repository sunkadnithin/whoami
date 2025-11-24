import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', to: '/#about' },
        { name: 'Experience', to: '/#experience' },
        { name: 'Projects', to: '/#projects' },
        // { name: 'Blog', to: '/blog' },
        { name: 'Contact', to: '/#contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    NS
                </Link>

                <div className="desktop-nav">
                    {navLinks.map((link, index) => (
                        link.to.startsWith('/#') ? (
                            <HashLink key={index} smooth to={link.to} className="nav-link">
                                <span className="nav-number">0{index + 1}.</span> {link.name}
                            </HashLink>
                        ) : (
                            <Link key={index} to={link.to} className="nav-link">
                                <span className="nav-number">0{index + 1}.</span> {link.name}
                            </Link>
                        )
                    ))}
                </div>

                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={30} color="var(--color-accent)" /> : <Menu size={30} color="var(--color-accent)" />}
                </button>

                <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link, index) => (
                        link.to.startsWith('/#') ? (
                            <HashLink key={index} smooth to={link.to} className="mobile-nav-link" onClick={toggleMenu}>
                                {link.name}
                            </HashLink>
                        ) : (
                            <Link key={index} to={link.to} className="mobile-nav-link" onClick={toggleMenu}>
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
