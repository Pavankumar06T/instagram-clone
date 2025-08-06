// src/Components/StoryBar.jsx
import React, { useState } from "react";
import "./StoryBar.css";
import story1 from "../assets/avathar1.png";
import story2 from "../assets/avathar2.png";
import story3 from "../assets/avathar3.png";

const stories = [
  { name: "Pavan", avatar: story1 },
  { name: "Vikki", avatar: story2 },
  { name: "Guna", avatar: story3 },
];

function StoryBar() {
  const [viewed, setViewed] = useState({});
  const [activeStory, setActiveStory] = useState(null);

  const handleClick = (story) => {
    if (activeStory?.name === story.name) {
      setActiveStory(null); // toggle close if same story clicked
    } else {
      setViewed((prev) => ({ ...prev, [story.name]: true }));
      setActiveStory(story);
    }
  };

  const closeModal = () => {
    setActiveStory(null);
  };

  return (
    <>
          <div className="story-header">
        <h6>Stories:</h6>
      </div>

      <div className="story-bar">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className={`story ${viewed[story.name] ? "viewed" : ""}`}
            onClick={() => handleClick(story)}
          >
            <img src={story.avatar} alt={story.name} />
            <p>{story.name}</p>
          </div>
        ))}
      </div>

      {activeStory && (
        <div className="story-modal" onClick={closeModal}>
          <div className="story-modal-content">
            <img src={activeStory.avatar} alt={activeStory.name} />
            <p>{activeStory.name}'s story</p>
          </div>
        </div>
      )}
    </>
  );
}

export default StoryBar;