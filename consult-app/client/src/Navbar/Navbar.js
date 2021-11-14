import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
   
    return (
        <div className="navbar-container">
            <span class="hamburger"></span>
            <div className="logo">CODA</div>
            <ul className="navbar-links">
                <Link to="/home">
                    <li >Home</li>
                </Link>

                <Link to="/search">
                    <li >Search</li>
                </Link>
                
                <Link to="/profile">
                    <li>My Profile</li>
                </Link>

                <Link to="/login">
                    <li >Logout</li>
                </Link>
            </ul>
        </div>
    );
}
