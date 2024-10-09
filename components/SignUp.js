import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './SignUp.css'; // Importing the CSS file for styling

function SignUp() {
    const [user, setUser] = useState({
        name: '', email: '', password: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/auth/signup', user)
            .then(response => {
                console.log("User Registered", response.data);
            })
            .catch(error => {
                console.log("Error", error);
            });
    };

    return (
        <div className="signup-page">
            <nav className="signup-navbar">
                {/* Home navigation link */}
                <Link to="/" className="home-link">Home</Link>
            </nav>
            <div className="signup-container">
                <h2 className="signup-title">Create Your Account</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        onChange={handleChange} 
                        className="input-field"
                    />
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
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>
                <p className="signin-link">
                    Already have an account? <a href="/signin">Sign In</a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
