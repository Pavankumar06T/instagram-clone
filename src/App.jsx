import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Suggestions from './Components/Suggestions';
import StoryBar from './Components/StoryBar';
import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar Drawer for mobile */}
      <div className={`sidebar-drawer ${showSidebar ? 'open' : ''}`}>
        <Sidebar />
        <button className="close-btn" onClick={() => setShowSidebar(false)}>Close</button>
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

      <div className="sidebar desktop-only">
        <Sidebar />
      </div>
      <div className="suggestions desktop-only">
        <Suggestions />
      </div>

      <button className="floating-btn sidebar-btn mobile-only" onClick={() => setShowSidebar(true)}>
        ☰
      </button>
      <button className="floating-btn suggestions-btn mobile-only" onClick={() => setShowSuggestions(true)}>
        💡
      </button>
    </div>
  );
}

export default App;