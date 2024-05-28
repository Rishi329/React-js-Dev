// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './components/BeerCard';
import Search from './components/Search';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
//npm install axios
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/beers/ale');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching the beers', error);
      }
    };
    fetchBeers();
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar />
      <h1>Beer List</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="beer-container">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
