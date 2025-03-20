import React from 'react';
import { formatDate } from '../../utils/dateFormatter';
import './Post.css';

function Post({ post, onDelete, onEdit, onLike }) {
  return (
    <div className="post">
      <div className="post-header">
        <span className="post-author">Pengguna</span>
        <span className="post-time">
          {formatDate(post.createdAt)}
          {post.edited && ' · diubah'}
        </span>
      </div>
      <div className="post-content">{post.content}</div>
      <div className="post-footer">
        <div className="post-actions-menu">
          <button 
            className={`post-action like-action ${post.liked ? 'active' : ''}`} 
            onClick={() => onLike(post.id)}
          >
            {post.liked ? '❤️' : '🤍'} 
            <span className="like-count">{post.likes > 0 ? post.likes : ''}</span>
          </button>
          <button 
            className="post-action edit-action" 
            onClick={() => onEdit(post)}
          >
            ✏️ Edit
          </button>
          <button 
            className="post-action delete-action" 
            onClick={() => onDelete(post.id)}
          >
            🗑️ Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;