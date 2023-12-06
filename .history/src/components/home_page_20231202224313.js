import React, { useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  const apiKey = 'YOUR_OMDB_API_KEY';

  const searchMovies = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: apiKey,
          s: searchQuery,
        },
      });

      setMovieList(response.data.Search || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>OMDB Movie List</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Cari film..."
      />
      <button onClick={searchMovies}>Cari</button>
      <div>
        {movieList.length > 0 ? (
          movieList.map((movie) => (
            <div key={movie.imdbID} className="movie-item">
              {movie.Title} ({movie.Year})
            </div>
          ))
        ) : (
          <p>Tidak ada hasil.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
