import React, { useState } from 'react';
import PostList from '../List/PostList';
import './Profile.css';

const ProfileComponent = ({ posts, onDelete, onEdit, onLike }) => {
  const [profileData] = useState({
    name: 'User Name',
    handle: '@username',
    bio: 'This is my Profile bio',
    followers: 245,
    following: 120,
    joinedDate: 'Maret 2023'
  });

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info">
          <div className="profile-avatar">👤</div>
          <h2>{profileData.name}</h2>
          <p className="profile-handle">{profileData.handle}</p>
          <p className="profile-bio">{profileData.bio}</p>
          <div className="profile-stats">
            <span><strong>{profileData.following}</strong> Mengikuti</span>
            <span><strong>{profileData.followers}</strong> Pengikut</span>
            <span>Bergabung {profileData.joinedDate}</span>
          </div>
        </div>
      </div>
      
      <div className="profile-tweets">
        <h3>Postingan Anda</h3>
        {posts.length > 0 ? (
          <PostList 
            posts={posts} 
            onDelete={onDelete} 
            onEdit={onEdit} 
            onLike={onLike} 
          />
        ) : (
          <div className="no-tweets">
            <p>Kamu belum menulis tweet apapun</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;