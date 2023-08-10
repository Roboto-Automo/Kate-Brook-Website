import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './burgermenu.css'; // Create a CSS file for burger menu styles

function BurgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
            <div className="burger-icon" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? 'open' : ''}`} />
                <div className={`bar ${menuOpen ? 'open' : ''}`} />
                <div className={`bar ${menuOpen ? 'open' : ''}`} />
            </div>
            <div className={`menu-popup ${menuOpen ? 'open' : ''}`}>
                {menuOpen && (
                    <div>
                        <div className="close-icon" onClick={closeMenu}>
                            &times;
                        </div>
                        <div className="menu-items">
                            <Link to="/" onClick={closeMenu}>About</Link>
                            <Link to="/book" onClick={closeMenu}>Not Exactly What I Had in Mind</Link>
                            <Link to="/other" onClick={closeMenu}>Other Writing</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}




export default BurgerMenu;