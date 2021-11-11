import React, {useRef, useState} from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import {useAuth} from './Contexts/Authcontext';
import {Link, useNavigate} from 'react-router-dom'

export default function Register() {
    const emailRef =useRef();
    const passwordRef =useRef();
    const passwordConfirmRef =useRef();
    const {signup} = useAuth(); 
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate.push('/home')
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false);
        
    }

    return (
        <>
            <Card> 
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form onSubmit={handleSubmit} > 
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label> 
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label> 
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label> 
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="register-button" type="submit">Register</Button>
                    </Form>
                </Card.Body>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link path="/login">Log In</Link>
                    </div>
            </Card>
        </>
    )
}
