import React from 'react'
import { useNavigate} from 'react-router-dom';
import {useAuth} from './Contexts/Authcontext';

export default function PrivateRoute( {children}) {
    const authed = useAuth()
    const Navigate = useNavigate()
    
    return authed ? children : <Navigate to="/home" />;
}
