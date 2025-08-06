import React from 'react';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Suggestions from './Components/Suggestions';
import StoryBar from './Components/StoryBar';
import './App.css';

function App() {
  return (
    <div className="d-flex">
      <div style={{ width: '18%' }}>
        <Sidebar />
      </div>
      <div style={{ width: '52%', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <StoryBar />
        <Feed />
      </div>
      <div style={{ width: '30%' }}>
        <Suggestions />
      </div>
    </div>
  );
}

export default App;