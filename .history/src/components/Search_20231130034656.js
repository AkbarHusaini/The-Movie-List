import React, { useState } from 'react';

const Search = ({ searchMovies }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    searchMovies(searchValue);
    resetInputField();
  };

  return (
    <form className="form">
      <input
        className="search"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search..."
      />
      <button className="submit-search" onClick={callSearchFunction}>
        
      </button>
    </form>
  );
};

export default Search;
