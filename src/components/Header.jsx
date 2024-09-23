import React from "react";
import { Link } from 'react-router-dom';
import { navLinks } from '../data/defs';

function Header() {
    const renderNavLink = (link, index) => (
        <li key={index} className="nav-item">
            <Link className="nav-link" to={link.path}>
                {link.name}
            </Link>
        </li>
    );

    return (
        <section id="Navbar">
            <nav className="navbar navbar-expand-lg rounded" aria-label="Twelfth navbar example">
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center">
                        <ul className="navbar-nav">
                            {navLinks.map(renderNavLink)}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;
