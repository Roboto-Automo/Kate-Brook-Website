import './Navbar.css';
import { Link } from "react-router-dom";
import BurgerMenu from './burgermenu';

export default function Navbar() {
    return (
        <div className="navbar">
        {/* Show original links on larger screens */}
        <div className="original-links">
            <Link to="/">About</Link>
            <Link to="/book">Not Exactly What I Had in Mind</Link>
            <Link to="/other">Other Writing</Link>
        </div>
        
        {/* Show burger menu on smaller screens */}
        <BurgerMenu />
    </div>
    )
}