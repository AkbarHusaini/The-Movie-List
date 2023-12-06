import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
