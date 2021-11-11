import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import {AuthProvider} from './Contexts/Authcontext';

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <AuthProvider> 
            <Routes>   
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/profile" element={<Profile />} /> 
              <Route exact path="/register" element={<Register />} /> 
            </Routes>
          </AuthProvider>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
