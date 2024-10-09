import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Optional: For styling the Home page

function Home() {
    return (
        <div className="home-page">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/signin" className="navbar-link">Login</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/signup" className="navbar-link">Sign Up</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link">About</Link> {/* About link */}
                    </li>
                    <li className="navbar-item">
                        <Link to="/book" className="navbar-link">Bookings</Link> {/* About link */}
                    </li>
                    <li className="navbar-item">
            <Link to="/local-guide" className="navbar-link">Local Guide</Link> {/* Link to Local Guide page */}
          </li>
                </ul>
            </nav>
            <div className="home-content">
                <h1>Welcome to Our TourNest Platform</h1>
                <p>Explore amazing homestays and local attractions!</p>
            </div>
        </div>
    );
}

export default Home;
