import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Suggestions from './Components/Suggestions';
import StoryBar from './Components/StoryBar';
import myImage from './assets/Instagram_txt.png';
import './App.css';

function App() {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="app-container">
      {/* Mobile Header */}
      <div className="mobile-header mobile-only">
        <img src={myImage} alt="Instagram Logo" className="mobile-logo" />
      </div>

      {/* Suggestions Drawer for mobile */}
      <div className={`suggestions-drawer ${showSuggestions ? 'open' : ''}`}>
        <Suggestions />
        <button className="close-btn" onClick={() => setShowSuggestions(false)}>Close</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <StoryBar />
        <Feed />
      </div>

      {/* Desktop Sidebar & Suggestions */}
      <div className="sidebar desktop-only">
        <Sidebar />
      </div>
      <div className="suggestions desktop-only">
        <Suggestions />
      </div>

      {/* Floating Suggestions Button for mobile */}
      <button
        className="floating-btn suggestions-btn mobile-only"
        onClick={() => setShowSuggestions(true)}
        aria-label="Show Suggestions"
      >
        💡
      </button>
    </div>
  );
}

export default App;