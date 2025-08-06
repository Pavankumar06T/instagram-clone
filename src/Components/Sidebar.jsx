import React from "react";
import "./Sidebar.css";
import myImage from "../assets/Instagram_txt.png";

function Sidebar() {
  return (
    <div className="Sidebar d-flex flex-column justify-content-between p-3 min-vh-100">
      <div>
        <img src={myImage} alt="Instagram Logo" className="mb-4" style={{ width: '120px' }} />

        <div className="mb-3"><i className="bi bi-house-door-fill me-2"></i>Home</div>
        <div className="mb-3"><i className="bi bi-search-heart-fill me-2"></i>Search</div>
        <div className="mb-3"><i className="bi bi-play-circle-fill me-2"></i>Reels</div>
        <div className="mb-3"><i className="bi bi-chat-heart-fill me-2"></i>Messages</div>
        <div className="mb-3"><i className="bi bi-person-circle me-2"></i>Profile</div>
      </div>
      <div>
        <div className="mb-3"><i className="bi bi-threads me-2"></i>Threads</div>
        <div><i className="bi bi-person-lines-fill me-2"></i>More</div>
      </div>
    </div>
  );
}

export default Sidebar;