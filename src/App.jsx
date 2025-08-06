import React from 'react';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Suggestions from './Components/Suggestions';
import StoryBar from './Components/StoryBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <StoryBar />
        <Feed />
      </div>
      <div className="suggestions">
        <Suggestions />
      </div>
    </div>
  );
}

export default App;