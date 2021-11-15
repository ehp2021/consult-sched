import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
   
    return (
        <div className="navbar-container">
            <span class="hamburger"></span>
            <div className="logo">C O D A </div>
            <ul className="navbar-links">
                <Link to="/home">
                    <li >HOME</li>
                </Link>
                
                <Link to="/profile">
                    <li>MY PROFILE</li>
                </Link>

                <Link to="/login">
                    <li >LOGIN or REGISTER</li>
                </Link>
            </ul>
        </div>
    );
}
