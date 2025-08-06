import React from "react";
import "./Sidebar.css";
import myImage from "../assets/Instagram_txt.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      {/* Logo for desktop */}
      <div className="sidebar-logo desktop-only">
        <img src={myImage} alt="Instagram Logo" style={{ width: '120px' }} />
      </div>
      {/* Logo for mobile */}
      <div className="sidebar-logo-mobile mobile-only">
        <img src={myImage} alt="Instagram Logo" style={{ width: '120px' }} />
      </div>
      {/* Desktop Sidebar Menu */}
      <div className="sidebar-menu desktop-only">
        <div className="mb-3"><i className="bi bi-house-door-fill me-2"></i>Home</div>
        <div className="mb-3"><i className="bi bi-search-heart-fill me-2"></i>Search</div>
        <div className="mb-3"><i className="bi bi-play-circle-fill me-2"></i>Reels</div>
        <div className="mb-3"><i className="bi bi-chat-heart-fill me-2"></i>Messages</div>
        <div className="mb-3"><i className="bi bi-person-circle me-2"></i>Profile</div>
      </div>
      {/* Desktop Sidebar Bottom */}
      <div className="sidebar-bottom desktop-only">
        <div className="mb-3"><i className="bi bi-threads me-2"></i>Threads</div>
        <div><i className="bi bi-person-lines-fill me-2"></i>More</div>
      </div>
      {/* Mobile Bottom Nav */}
      <div className="sidebar-bottom-nav mobile-only">
        <i className="bi bi-house-door-fill"></i>
        <i className="bi bi-search-heart-fill"></i>
        <i className="bi bi-play-circle-fill"></i>
        <i className="bi bi-chat-heart-fill"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
}

export default Sidebar;