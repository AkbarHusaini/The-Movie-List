// Header.js
import React from 'react';
import Search from './Search'; // Import the Search component

const Header = ({ title, searchMovies }) => {
  return (
    <div className="navbar">
      <h1>{title}</h1>
      <Search searchMovies={searchMovies} />
    </div>
  );
};

export default Header;
