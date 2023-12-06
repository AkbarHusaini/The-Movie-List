import React, { useState, useEffect, useReducer } from 'react';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

const API_KEY = 'your_api_key'; // Replace with your actual API key

const initialState = {
  movies: [],
  loading: true,
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        errorMessage: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchMovies = async (searchValue) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === 'True') {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: data.Search,
        });
      } else {
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          error: data.Error,
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch({
        type: 'SEARCH_MOVIES_FAILURE',
        error: 'An error occurred while fetching data.',
      });
    }
  };

  useEffect(() => {
    // Fetch initial data (e.g., popular movies)
    searchMovies('popular');
  }, []);

  return (
    <div>
      <Header title="FinProH8 Movies" />
      <Search searchMovies={searchMovies} />
      <div>
        {state.loading && !state.errorMessage ? (
          <span>Loading...</span>
        ) : state.errorMessage ? (
          <div>{state.errorMessage}</div>
        ) : (
          state.movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
