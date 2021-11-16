import React, {useState} from 'react';
import {Card, Alert, ListGroup} from 'react-bootstrap';
import {useAuth} from './Contexts/Authcontext';
import { useNavigate, Link} from 'react-router-dom';


export default function Profile() {

    const [error, setError]=useState("");
    const { currentUser, logout} = useAuth();
    const navigate = useNavigate();
    
    async function handleLogout(e) {
        e.preventDefault();
        setError('')

        try {
            await logout();
            navigate('/login');
        } catch {
            setError('Failed to log out')
        }
    };


    return (
        <div className="profile-container" style={{padding: "10px"}}>
            <Card>
                <Card.Body>
                    <div className="profile-container">
                        <Card.Title><h2>Profile</h2></Card.Title>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>Email: </strong> {currentUser.email}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Company:</strong> N/A
                                </ListGroup.Item>
                            </ListGroup>
                    </div>
                    

                    <div className="logout-container"> 
                        <Link to="/login">
                            <div className="logout" onClick={handleLogout} 
                            style={{color: "black", marginTop: "20px"}}> 
                                Log Out 
                            </div>
                        </Link>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}
