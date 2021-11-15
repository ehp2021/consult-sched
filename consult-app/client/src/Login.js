import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import {useAuth} from './Contexts/Authcontext';
import {Link, useNavigate} from 'react-router-dom'

export default function Login() {
    const emailRef =useRef();
    const passwordRef =useRef();
    const {login} = useAuth(); 
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        try { 
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/home')
        } catch {
            setError('Failed to login')
        }

        setLoading(false);
        
    }

    return (
        <div style={{padding: "15px"}}>
            <Card> 
                <Card.Body>
                    <h2 className="login-container">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit} > 
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label> 
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label> 
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        
                        <Button style={{height: "30px", width: "80px"}} disabled={loading} className="register-button" 
                            type="submit">Log In</Button>
                    </Form>
                </Card.Body>
                <div className="login-register-container" style={{marginTop: "15px"}}>
                    Need an account? <Link to="/register" style={{color: "black"}}>Register Here</Link>
                </div>
            </Card>
        </div>
    )
}
