import React, { useEffect, useState } from 'react';
import Header from './commons/header/Header';
import Movie from './Movie';
import './movie.css';

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    useEffect(() => {
      if (searchMovie) {
        fetch(SEARCH_API + searchMovie)
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.results);
          });
      }
    }, []);
  };
  const handleChange = (e) => {
    setSearchMovie(e.target.value);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={searchMovie}
          onChange={handleChange}
        />
      </form>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default MovieList;
