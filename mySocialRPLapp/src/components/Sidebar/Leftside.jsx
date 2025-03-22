import React from 'react';
import './Leftside.css';

const LeftSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="left-sidebar">
      <div className="logo-container">
        <img src="/logo/TCsocialAPP.png" alt="Logo TcSocialAPP">
        </img>
      </div>
      <nav className="nav-links">
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'beranda' ? 'active' : ''}`}
          onClick={() => setActiveTab('beranda')}
        >
          <i className="nav-link-icon">🏠</i>
          <span className="nav-link-text">Beranda</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'jelajahi' ? 'active' : ''}`}
          onClick={() => setActiveTab('jelajahi')}
        >
          <i className="nav-link-icon">🔍</i>
          <span className="nav-link-text">Jelajahi</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'notifikasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifikasi')}
        >
          <i className="nav-link-icon">🔔</i>
          <span className="nav-link-text">Notifikasi</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'pesan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pesan')}
        >
          <i className="nav-link-icon">✉️</i>
          <span className="nav-link-text">Pesan</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'tersimpan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tersimpan')}
        >
          <i className="nav-link-icon">📌</i>
          <span className="nav-link-text">Tersimpan</span>
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeTab === 'profil' ? 'active' : ''}`}
          onClick={() => setActiveTab('profil')}
        >
          <i className="nav-link-icon">👤</i>
          <span className="nav-link-text">Profil</span>
        </a>
      </nav>
      <button className="tweet-btn" onClick={() => setActiveTab('tweet')}>
        <span className="tweet-btn-text">Tweet</span>
        <span className="tweet-btn-icon">✏️</span>
      </button>
    </div>
  );
};

export default LeftSidebar;