import React from 'react';
import Post from '../Post/Post';
import './PostList.css';

function PostList({ posts, onDelete, onEdit, onLike }) {
  if (posts.length === 0) {
    return (
      <div className="posts-container">
        <div className="empty-state">
          Belum ada postingan. Buatlah postingan pertamamu!
        </div>
      </div>
    );
  }

  return (
    <div className="posts-container">
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          onDelete={onDelete} 
          onEdit={onEdit} 
          onLike={onLike} 
        />
      ))}
    </div>
  );
}

export default PostList;