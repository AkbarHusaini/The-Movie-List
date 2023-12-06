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
      
    </div>

     
  );
};
}
export default Movie;
