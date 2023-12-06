import React, { useState, useEffect, useReducer } from 'react';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

const API_KEY = 'c94343a8'; // Replace with your actual API key

const initialState = {
  movies: [],
  loading: true,
  errorMessage: null,
  page: 1, // Track the current page
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload, // Replace existing movies with new search results
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


const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchMovies = async (searchValue, page = 1) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=${page}`);
      const data = await response.json();
  
      console.log('API Response:', data); // Log the API response
  
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
  
  const loadMoreMovies = () => {
    searchMovies('popular', state.page + 1);
  };

  useEffect(() => {
    // Fetch initial data (e.g., popular movies)
    searchMovies('popular');
  }, []);

  return (
    <div>
      <Header title="The Movies" />
      <Search searchMovies={searchMovies} />
      <div className="container">
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

export default HomePage;
