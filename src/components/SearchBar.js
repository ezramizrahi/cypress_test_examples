import React from 'react';
import { Input } from 'semantic-ui-react';
import './SearchBar.css';

const SearchBar = ({ value, handleChange }) => {
 return (
   <div className="search-container">
    <Input focus placeholder='Film title or director...' value={value} onChange={handleChange} />
   </div>
 );
};

export default SearchBar;
