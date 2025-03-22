import React from 'react';
import PostList from '../List/PostList';
import './SavedComponent.css';

const SavedPostsComponent = ({ posts, onLike, onDelete, onEdit }) => {
  const savedPosts = posts.filter(post => post.liked);
  
  return (
    <div className="saved-posts-container">
      <h2>Tweet Tersimpan</h2>
      {savedPosts.length > 0 ? (
        <PostList 
          posts={savedPosts} 
          onDelete={onDelete} 
          onEdit={onEdit} 
          onLike={onLike} 
        />
      ) : (
        <div className="no-saved-posts">
          <p>Kamu belum menyimpan tweet apapun</p>
          <p>Like tweet untuk menyimpannya di sini</p>
        </div>
      )}
    </div>
  );
};

export default SavedPostsComponent;