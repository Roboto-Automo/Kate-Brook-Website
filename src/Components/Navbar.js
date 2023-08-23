import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BurgerMenu from './burgermenu';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("about");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="navbar">
            {/* Show original links on larger screens */}
            <div className="original-links">
                <Link
                    to="/"
                    onClick={() => handleLinkClick('about')}
                    className={`navbar-link ${activeLink === 'about' ? 'active-link' : ''}`}
                >
                    About
                </Link>
                <Link
                    to="/book"
                    onClick={() => handleLinkClick('book')}
                    className={`navbar-link ${activeLink === 'book' ? 'active-link' : ''}`}
                >
                    Not Exactly What I Had in Mind
                </Link>
                <Link
                    to="/other"
                    onClick={() => handleLinkClick('other')}
                    className={`navbar-link ${activeLink === 'other' ? 'active-link' : ''}`}
                >
                    Other Writing
                </Link>
            </div>

            {/* Show burger menu on smaller screens */}
            <BurgerMenu />
        </div>
    );
}
