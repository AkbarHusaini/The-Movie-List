import React, { useEffect, useReducer } from 'react';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

const API_KEY = 'c94343a8'; // Replace with your actual API key

const initialState = {
  movies: [],
  loading: true,
  errorMessage: null,
  page: 1,
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
    case 'LOAD_MORE_SUCCESS':
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        page: state.page + 1,
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
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=${page}`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        dispatch({
          type: page === 1 ? 'SEARCH_MOVIES_SUCCESS' : 'LOAD_MORE_SUCCESS',
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
    searchMovies('y', state.page + 1);
  };

  useEffect(() => {
    searchMovies('y');
  }, []);

  return (
    <div>
      <Header title="The Movies" searchMovies={searchMovies} />

      <div className="container">
        {state.loading && !state.errorMessage ? (
          <span>Loading...</span>
        ) : state.errorMessage ? (
          <div>{state.errorMessage}</div>
        ) : (
          <>
            {state.movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))}
            <button onClick={loadMoreMovies}>Load More</button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
