import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
        <Link to="/">About</Link>
        <Link to="/book">Not Exactly What I Had in Mind</Link>
        <Link to="/other">Other Writing</Link>
        </div>
    )
}