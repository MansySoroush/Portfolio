import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { navLinks, hobbyLinks, socialLinks } from '../data/defs';


function Footer() {
    const renderNavLink = (link, index) => (
        <li key={index} className="nav-item">
            <Link className="nav-link px-2 text-body-secondary" to={link.path}>
                {link.name}
            </Link>
        </li>
    );

    const renderSocialLink = (social, index) => (
        <li key={index} className="footer-social-links">
            <a href={social.href} className="text-body-secondary" data-toggle="tooltip" title={social.tooltip}>
                <img src={social.imgSrc} alt={social.alt} className="virtual-media-logo" />
            </a>
        </li>
    );

    return (
        <section id="footer" className="gradient-background">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                        <ul className="nav">
                            {navLinks.map(renderNavLink)}
                            {hobbyLinks.map(renderNavLink)}
                        </ul>
                        <ul className="nav">
                            {socialLinks.map(renderSocialLink)}
                        </ul>
                </footer>
            </div>
        </section>
    );
}

export default Footer;
