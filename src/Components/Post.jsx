import React, { useState } from 'react';

function Post({ username, caption, image, comments }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="card mb-3">
      <div className="card-header fw-bold">{username}</div>
      <img src={image} className="card-img-top" alt="post" />
      <div className="card-body">
        <p className="card-text">{caption}</p>
        <div>
          <i
            className={`bi ${liked ? 'bi-heart-fill text-danger' : 'bi-heart'} me-2`}
            onClick={handleLike}
            style={{ cursor: 'pointer' }}
          ></i>
          <i className="bi bi-chat-dots-fill me-2"></i>
          <i className="bi bi-share-fill"></i>
        </div>
        {/* Conditional Rendering */}
        {comments?.length > 0 ? (
          <ul className="mt-2">
            {comments.map((c, i) => (
              <li key={i}><strong>{c.user}:</strong> {c.text}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted mt-2">No comments yet</p>
        )}
      </div>
    </div>
  );
}

export default Post;