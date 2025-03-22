import React, { useState } from 'react';
import PostList from '../List/PostList';
import './SearchComponent.css';

const SearchComponent = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      const results = posts.filter(post => 
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-container">
      <h2>Jelajahi</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Cari tweet..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">Cari</button>
      </form>
      
      {searchResults.length > 0 ? (
        <div className="search-results">
          <h3>Hasil Pencarian</h3>
          <PostList 
            posts={searchResults} 
            isSearchResult={true}
          />
        </div>
      ) : searchQuery !== '' && (
        <div className="no-results">
          <p>Tidak ada hasil untuk "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;