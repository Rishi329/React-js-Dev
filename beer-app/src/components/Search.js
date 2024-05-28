// src/components/Search.js
import React from 'react';
import './Search.css';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a beer..."
      />
    </div>
  );
};

export default Search;
