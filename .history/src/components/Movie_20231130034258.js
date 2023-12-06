import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <div className="movie-infos">
        <h2 className="movie-title">{movie.Title}</h2>
        <p className="movie-voting">{movie.Votes}</p>
      </div>
    </div>
  );
};

export default Movie;
