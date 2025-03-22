import React, { useState } from 'react';

const MobileTweetButton = ({ onClick }) => {
  return (
    <button className="mobile-tweet-btn" onClick={onClick}>
      ✏️
    </button>
  );
};

const MobileSidebarButton = ({ onClick }) => {
  return (
    <button className="mobile-sidebar-button" onClick={onClick}>
      ☰
    </button>
  );
};

const MobileSidebarOverlay = ({ isOpen, onClick }) => {
  return (
    <div 
      className={`mobile-sidebar-overlay ${isOpen ? 'open' : ''}`} 
      onClick={onClick}
    ></div>
  );
};

const MobileSidebar = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  return (
    <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="mobile-sidebar-close" onClick={onClose}>
        ✕
      </button>
      
      <div className="logo-container">
        <img src="/logo/TCsocialAPP.png" alt="Logo TcSocialAPP" />
      </div>
      
      <div className="nav-links">
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'beranda' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('beranda');
            onClose();
          }}
        >
          <i className="nav-link-icon">🏠</i>
          <span className="nav-link-text">Beranda</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'jelajahi' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('jelajahi');
            onClose();
          }}
        >
          <i className="nav-link-icon">🔍</i>
          <span className="nav-link-text">Jelajahi</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'notifikasi' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('notifikasi');
            onClose();
          }}
        >
          <i className="nav-link-icon">🔔</i>
          <span className="nav-link-text">Notifikasi</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'pesan' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('pesan');
            onClose();
          }}
        >
          <i className="nav-link-icon">✉️</i>
          <span className="nav-link-text">Pesan</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'tersimpan' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('tersimpan');
            onClose();
          }}
        >
          <i className="nav-link-icon">📌</i>
          <span className="nav-link-text">Tersimpan</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'profil' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('profil');
            onClose();
          }}
        >
          <i className="nav-link-icon">👤</i>
          <span className="nav-link-text">Profil</span>
        </a>
      </div>
      
      <button className="tweet-btn" onClick={() => {
        setActiveTab('tweet');
        onClose();
      }}>
        <span className="tweet-btn-text">Tweet</span>
        <span className="tweet-btn-icon">✏️</span>
      </button>
    </div>
  );
};


const MobileController = ({ activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = '';
  };
  
  const handleTweet = () => {
    setActiveTab('tweet');
  };
  
  return (
    <>
      <MobileSidebarButton onClick={openSidebar} />
      <MobileSidebarOverlay isOpen={isSidebarOpen} onClick={closeSidebar} />
      <MobileSidebar 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <MobileTweetButton onClick={handleTweet} />
    </>
  );
};

export { MobileTweetButton, MobileSidebarButton, MobileSidebarOverlay, MobileSidebar, MobileController };