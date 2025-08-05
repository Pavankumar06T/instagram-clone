import React from 'react';
import StoryBar from './StoryBar';
import posts from '../dummyFeedData';
import Post from './Post';

function Feed() {
  return (
    <div className="p-3">
      {posts.map(post => (
        <Post
          key={post.id}
          username={post.username}
          caption={post.caption}
          image={post.image}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default Feed;