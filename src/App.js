import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import OTPVerification from './OTPVerification'; // Importing the OTPVerification component

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/otp-verification" element={<OTPVerification />} /> {/* Adding the OTPVerification route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
