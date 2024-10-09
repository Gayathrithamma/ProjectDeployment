import React from 'react';
import { Link } from 'react-router-dom'; 
import './About.css'; // Import the CSS file for styling

function About() {
    return (
        <div className="about-page">
             <nav className="about-navbar">
                <Link to="/" className="home-link">Home</Link> {/* Home navigation */}
            </nav>
            <h1 className="about-title">Explore Top Tourist Attractions</h1>
            
            <div className="tourism-section">
                <div className="tourism-place">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/375px-Taj_Mahal_%28Edited%29.jpeg" alt="Tourist Place 1" className="tourism-image"/>
                    <h2 className="tourism-name">Taj Mahal</h2>
                    <p className="tourism-description">A breathtaking monument to love, the Taj Mahal is a marvel of Mughal architecture, with its white marble dome, intricate carvings, and reflecting pools making it one of the most beautiful buildings in the world.</p>
                </div>
                <div className="tourism-place">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/250px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg" alt="Tourist Place 1" className="tourism-image"/>
                    <h2 className="tourism-name">The Great Wall Of China</h2>
                    <p className="tourism-description">This iconic structure stretches over 13,000 miles across China, offering breathtaking views and a glimpse into ancient Chinese history and defense strategies. Its winding path along rugged mountains makes it a must-see.</p>
                </div>
                <div className="tourism-place">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9YUQ_c7WVyd9ocYCgt_Yz9CUzLkEQfNXBi_AEfiGZ7qE0cOPRKSZd0IjjfqW4oERefs&usqp=CAU" alt="Tourist Place 1" className="tourism-image"/>
                    <h2 className="tourism-name">Eiffel Tower, France</h2>
                    <p className="tourism-description"> A symbol of romance and Paris, the Eiffel Tower offers stunning views of the city, especially at night when it sparkles. It’s a key attraction for those wanting to experience the charm of the French capital.</p>
                </div>

                {/* Add more tourism places similarly */}
            </div>

            <h1 className="about-title">Book Your Stay at Top Resorts</h1>

            <div className="booking-section">
                <div className="resort-booking">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/96977642.jpg?k=2a4748c56431699c05e83788172e0c993e44f01d5d7ac22d932856609bf7c3c8&o=&hp=1" alt="Resort 1" className="resort-image"/>
                    <h2 className="resort-name">Evolve Back (Coorg, Karnataka)</h2>
                    <p className="resort-description">Set amidst lush coffee plantations in Coorg, this eco-friendly resort offers rustic luxury with beautifully designed villas, private pools, and stunning views of the Western Ghats.</p>
                </div>
                <div className="resort-booking">
                    <img src="https://www.designreisen.de/fileadmin/designreisen-relaunch/Indischer_Ozean/Malediven/Noonu_Atoll_Soneva_Jani/Soneva-Jani_overwater-Villa_von-oben.jpg" alt="Resort 1" className="resort-image"/>
                    <h2 className="resort-name">Soneva Jani (Maldives)</h2>
                    <p className="resort-description">A luxurious eco-resort set on a private island, Soneva Jani features water villas with private pools and waterslides. The clear blue waters and immersive nature experiences make it a top destination for relaxation.</p>
                </div>
                <div className="resort-booking">
                    <img src="https://static.tnn.in/thumb/msid-103829496,thumbsize-1130545,width-1280,height-720,resizemode-75/103829496.jpg?quality=100" alt="Resort 1" className="resort-image"/>
                    <h2 className="resort-name">The Leela Palace (Udaipur, Rajasthan)</h2>
                    <p className="resort-description">This palatial resort overlooking Lake Pichola offers a blend of traditional Rajasthani architecture and modern luxury. With lush gardens, opulent interiors, and world-class dining, it’s a royal escape.</p>
                </div>

                {/* Add more resorts similarly */}
            </div>
        </div>
    );
}

export default About;
