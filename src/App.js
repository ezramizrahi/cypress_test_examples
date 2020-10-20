import React, { useState, useEffect } from 'react';
import CardsContainer from './components/CardsContainer';
import SearchBar from './components/SearchBar';
import { films } from './films'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = films.filter(f => f.title.toLowerCase().includes(searchTerm.toLowerCase()) || f.director.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <SearchBar value={searchTerm} handleChange={e => handleChange(e)} />
      {(searchTerm.length !== 0 && searchResults.length > 0) &&
        <CardsContainer searchResults={searchResults} />
      }
    </div>
  );
}

export default App;
