import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LocalGuide.css'; // Add this CSS file for styling

function LocalGuide() {
  // State to handle selected guide, booking details, and reviews
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({ date: '', time: '' });
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  // Mock data for guides
  const guides = [
    { id: 1, name: "John Doe", location: "New Delhi", rating: 4.5, expertise: "Historical Tours" },
    { id: 2, name: "Jane Smith", location: "Goa", rating: 4.8, expertise: "Beach and Water Sports" }
  ];

  // Handle booking form submit
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log(`Booked ${selectedGuide.name} on ${bookingDetails.date} at ${bookingDetails.time}`);
    alert(`You have booked ${selectedGuide.name}`);
  };

  // Handle rating form submit
  const handleRatingSubmit = (e) => {
    e.preventDefault();
    console.log(`Rating for ${selectedGuide.name}: ${rating}, Review: ${review}`);
    alert(`Thanks for rating ${selectedGuide.name}`);
  };

  return (
    <div className="local-guide-page">
    <nav className="local-guide-navbar">
        <Link to="/" className="home-link">Home</Link> {/* Home Link */}
      </nav>
      <h1 className="heading">Find and Book a Local Guide</h1>
      
      {/* Guide list */}
      <div className="guide-list">
        {guides.map(guide => (
          <div key={guide.id} className="guide-card">
            <h3>{guide.name}</h3>
            <p>Location: {guide.location}</p>
            <p>Expertise: {guide.expertise}</p>
            <p>Rating: {guide.rating} / 5</p>
            <button onClick={() => setSelectedGuide(guide)} className="book-btn">View & Book</button>
          </div>
        ))}
      </div>

      {/* Show details of selected guide */}
      {selectedGuide && (
        <div className="guide-details">
          <h2>Book {selectedGuide.name}</h2>
          <form onSubmit={handleBookingSubmit} className="booking-form">
            <label>
              Select Date:
              <input type="date" value={bookingDetails.date} onChange={(e) => setBookingDetails({ ...bookingDetails, date: e.target.value })} required />
            </label>
            <label>
              Select Time:
              <input type="time" value={bookingDetails.time} onChange={(e) => setBookingDetails({ ...bookingDetails, time: e.target.value })} required />
            </label>
            <button type="submit" className="submit-btn">Book Now</button>
          </form>

          <h2>Rate {selectedGuide.name}</h2>
          <form onSubmit={handleRatingSubmit} className="rating-form">
            <label>
              Rating:
              <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} max="5" min="1" required />
            </label>
            <label>
              Review:
              <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
            </label>
            <button type="submit" className="submit-btn">Submit Rating</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LocalGuide;
