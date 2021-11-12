import React, {useState} from 'react';
import {Card, Button, Alert } from 'react-bootstrap';
import {useAuth} from './Contexts/Authcontext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [error, setError]=useState("");
    const { currentUser, logout} = useAuth();
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout();
            navigate.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }



    return (
        <>
            <Card>
                <Card.Body>
                    <div className="profile-container">
                        <h2>Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <strong>Email:</strong> {currentUser.email}

                        <div className="past-consults">Past Consultations</div>

                        {/* show a short DoctorList here */}

                    </div>

                </Card.Body>
            </Card>
            <div className="logout-button">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
