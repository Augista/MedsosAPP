import React, { useState, useEffect } from 'react';

const PostForm = ({ addPost, editingPost, updatePost, cancelEditing, isMobile }) => {
  const [content, setContent] = useState('');
  const maxLength = 280;

  useEffect(() => {
    if (editingPost) {
      setContent(editingPost.content);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (content.trim() === '') return;
    
    if (editingPost) {
      updatePost(editingPost.id, content);
    } else {
      addPost(content);
    }
    
    setContent('');
  };

  return (
    <form className={`post-form ${isMobile ? 'mobile-post-form' : ''}`} onSubmit={handleSubmit}>
      {isMobile && (
        <div className="mobile-form-header">
          <button type="button" onClick={cancelEditing} className="back-button">
            ←
          </button>
          <button
            type="submit"
            className="post-button mobile-submit"
            disabled={content.trim() === ''}
          >
            {editingPost ? 'Perbarui' : 'Tweet'}
          </button>
        </div>
      )}
      
      <div className="profile-avatar"></div>
      
      <div className="post-form-container">
        <textarea
          className="post-textarea"
          placeholder="Apa yang sedang terjadi?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={maxLength}
          autoFocus={isMobile}
        />
        
        <div className="post-form-actions">
          <div className="post-form-icons">
            <button type="button" className="icon-button">📷</button>
            <button type="button" className="icon-button">📊</button>
            <button type="button" className="icon-button">😊</button>
            <button type="button" className="icon-button">📅</button>
            <button type="button" className="icon-button">📍</button>
          </div>
          
          <div className="post-form-submit">
            {content.length > 0 && (
              <span className="character-count">{maxLength - content.length}</span>
            )}
            
            {editingPost && !isMobile && (
              <button type="button" onClick={cancelEditing} className="cancel-button">
                Batal
              </button>
            )}
            
            {!isMobile && (
              <button
                type="submit"
                className="post-button"
                disabled={content.trim() === ''}
              >
                {editingPost ? 'Perbarui' : 'Tweet'}
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostForm;