import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
   
    return (
        <div className="navbar-container">
            <span class="hamburger"></span>
            <div className="logo">  
                {/* <img 
                    src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094633/consulting.png" 
                    alt=""/> */}
                CODA
            </div>
            <ul className="navbar-links">
                <Link to="/home">
                    <li >Home</li>
                </Link>
                
                <Link to="/profile">
                    <li>My Profile</li>
                </Link>

                <Link to="/login">
                    <li >Login</li>
                </Link>
            </ul>
        </div>
    );
}
