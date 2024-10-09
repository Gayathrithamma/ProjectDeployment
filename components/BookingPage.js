import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookingPage.css'; // Importing CSS for styling

function BookingPage() {
    const [bookingDetails, setBookingDetails] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: 'Single',
    });

    const handleChange = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission logic here (e.g., send to server, store in database)
        console.log('Booking Details:', bookingDetails);
    };

    return (
        <div className="booking-page">
            <nav className="navbar">
                <Link to="/" className="home-link">Home</Link> {/* Link to Home Page */}
            </nav>
            <div className="resort-info">
           < h1 className="booking-title">Peak Paradise Resort</h1>
                <img src="https://www.dellaresorts.com/new-images/new-camp-della-exterior-v4.jpg" alt="Peak Paradise Resort" className="resort-image" />
                <p>Experience luxury and comfort at Peak Paradise, a premium resort offering stunning views and top-class amenities.</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
                <label>Check-in Date:</label>
                <input type="date" name="checkIn" onChange={handleChange} required />

                <label>Check-out Date:</label>
                <input type="date" name="checkOut" onChange={handleChange} required />

                <label>Number of Guests:</label>
                <input type="number" name="guests" value={bookingDetails.guests} min="1" onChange={handleChange} required />

                <label>Room Type:</label>
                <select name="roomType" onChange={handleChange} value={bookingDetails.roomType}>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Family">Family Suite</option>
                </select>

                <button type="submit" className="booking-btn">Confirm Booking</button>
            </form>
        </div>
    );
}

export default BookingPage;
