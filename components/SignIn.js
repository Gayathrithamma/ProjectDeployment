import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './SignIn.css'; // Importing the CSS file for styling

function SignIn() {
    const [credentials, setCredentials] = useState({
        email: '', password: ''
    });

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/auth/signin', credentials)
            .then(response => {
                console.log("User Logged In", response.data);
            })
            .catch(error => {
                console.log("Error", error);
            });
    };

    return (
        <div className="signin-page">
            <nav className="signin-navbar">
                {/* Home navigation link */}
                <Link to="/" className="home-link">Home</Link>
            </nav>
            <div className="signin-container">
                <h2 className="signin-title">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="signin-form">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={handleChange} 
                        className="input-field"
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={handleChange} 
                        className="input-field"
                    />
                    <button type="submit" className="signin-btn">Sign In</button>
                </form>
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
