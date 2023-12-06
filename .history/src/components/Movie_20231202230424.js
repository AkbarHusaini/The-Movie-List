import React from 'react';


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

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <div className="movie-infos">
        <h2 className="movie-title">{movie.Title}</h2>
      </div>
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
    </div>

     
  );
};
}
export default Movie;
