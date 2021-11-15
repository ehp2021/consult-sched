import React, {useState} from 'react';
import {Card, Alert } from 'react-bootstrap';
import {useAuth} from './Contexts/Authcontext';
import { useNavigate } from 'react-router-dom';
// import Doctor from './Doctor/Doctor';

export default function Profile() {

    const [error, setError]=useState("");
    const { currentUser, logout} = useAuth();
    const navigate = useNavigate();

    async function handleLogout(e) {
        e.preventDefault();
        setError('')

        try {
            await logout();
            navigate('/');
        } catch {
            setError('Failed to log out')
        }
    };

    return (
        <div className="profile-container" style={{padding: "10px"}}>
            <Card>
                <Card.Body>
                    <div className="profile-container">
                        <h2>Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <strong>Email:</strong> {currentUser.email}
                    </div>
                    
                    <div className="logout-container"> 
                        <a href="/" onClick={handleLogout} style={{color: "black"}}> Log Out </a>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}
