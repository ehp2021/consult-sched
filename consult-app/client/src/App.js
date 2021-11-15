import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import {AuthProvider} from './Contexts/Authcontext';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <AuthProvider> 
            <Routes>   
              <Route path="/home"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/register" element={<Register />} /> 
            </Routes>
          </AuthProvider>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
