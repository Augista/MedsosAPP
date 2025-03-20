import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import { getPosts, savePosts } from './services/storage';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const loadedPosts = getPosts();
    setPosts(loadedPosts);
  }, []);

  const addPost = (content) => {
    const newPost = {
      id: Date.now().toString(),
      content,
      createdAt: new Date(),
      likes: 0,
      liked: false,
      edited: false
    };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  };

  const updatePost = (id, content) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          content,
          edited: true,
          editedAt: new Date()
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    savePosts(updatedPosts);
    setEditingPost(null);
  };

  const deletePost = (id) => {
    if (window.confirm('Apakah kamu yakin ingin menghapus postingan ini?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      savePosts(updatedPosts);
    }
  };

  const toggleLike = (id) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  };

  const startEditing = (post) => {
    setEditingPost(post);
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        <PostForm 
          addPost={addPost} 
          editingPost={editingPost} 
          updatePost={updatePost} 
          cancelEditing={() => setEditingPost(null)} 
        />
        <PostList 
          posts={posts} 
          onDelete={deletePost} 
          onEdit={startEditing} 
          onLike={toggleLike} 
        />
      </div>
    </div>
  );
}

export default App;