import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';  // Import the Home component
import SignUp from './components/SignUp';  // Import SignUp component
import SignIn from './components/SignIn';  // Import SignIn component
import About from './components/About';
import LocalGuide from './components/LocalGuide';  // Adjust the path if necessary
import BookingPage from './components/BookingPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />  {/* Home page */}
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignIn />} />  {/* Sign In page */}
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/book" element={<BookingPage />} /> 
                <Route path="/local-guide" element={<LocalGuide />} />
                 {/* Sign Up page */}
            </Routes>
        </Router>
    );
}

export default App;
