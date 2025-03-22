import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import PostForm from './components/Form/PostForm';
import PostList from './components/List/PostList';
import LeftSidebar from './components/Sidebar/Leftside';
import { MobileController } from './components/Mobile/Mobile';
import { getPosts, savePosts } from './services/storage';
import SearchComponent from './components/Search/SearchComponent';
import MessagesComponent from './components/Messages/Messages';
import SavedPostsComponent from './components/Saved/SavedComponent';
import ProfileComponent from './components/Profile/Profile';
import NotificationsComponent from './components/Notif/Notifications';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [showMobilePostForm, setShowMobilePostForm] = useState(false);
  const [activeTab, setActiveTab] = useState('beranda');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 688);

  useEffect(() => {
    const loadedPosts = getPosts();
    setPosts(loadedPosts);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 688);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addPost = (content) => {
    const newPost = {
      id: Date.now().toString(),
      content,
      createdAt: new Date(),
      likes: 0,
      liked: false,
      edited: false,
      comments: 0,
      retweets: 0
    };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    savePosts(updatedPosts);
    setShowMobilePostForm(false);
    setActiveTab('beranda');
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
    setShowMobilePostForm(true);
  };

  const handleMobileTweetClick = () => {
    setShowMobilePostForm(true);
    setActiveTab('tweet');
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case 'jelajahi':
        return <SearchComponent posts={posts} />;
      case 'tersimpan':
        return <SavedPostsComponent 
          posts={posts} 
          onDelete={deletePost} 
          onEdit={startEditing} 
          onLike={toggleLike} 
        />;
      case 'profil':
        return <ProfileComponent 
          posts={posts} 
          onDelete={deletePost} 
          onEdit={startEditing} 
          onLike={toggleLike} 
        />;
      case 'notifikasi':
        return <NotificationsComponent />;
      case 'pesan':
        return <MessagesComponent />;
      case 'tweet':
        return (
          <div className="tweet-form-container">
            <h2>Buat Postingan Baru</h2>
            <PostForm 
              addPost={addPost} 
              editingPost={null} 
              updatePost={updatePost} 
              cancelEditing={() => setActiveTab('beranda')} 
            />
          </div>
        );
      default:
        return (
          <>
            <Header />
            
            {(!showMobilePostForm || !isMobile) && (
              <PostForm 
                addPost={addPost} 
                editingPost={editingPost} 
                updatePost={updatePost} 
                cancelEditing={() => {
                  setEditingPost(null);
                  setShowMobilePostForm(false);
                }} 
              />
            )}
            
            {(showMobilePostForm && isMobile) ? (
              <div className="mobile-post-form-container">
                <PostForm 
                  addPost={addPost} 
                  editingPost={editingPost} 
                  updatePost={updatePost} 
                  cancelEditing={() => {
                    setEditingPost(null);
                    setShowMobilePostForm(false);
                  }} 
                  isMobile={true}
                />
              </div>
            ) : (
              <PostList 
                posts={posts} 
                onDelete={deletePost} 
                onEdit={startEditing} 
                onLike={toggleLike} 
              />
            )}
          </>
        );
    }
  };

  return (
    <div className="app">
      <div className="twitter-layout">
        {!isMobile && (
          <LeftSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        
        <main className="main-content">
          {renderMainContent()}
        </main>
        
        {isMobile && (
          <MobileController 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        )}
      </div>
    </div>
  );
}

export default App;