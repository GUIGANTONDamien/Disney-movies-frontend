/* eslint-disable react/prop-types */
import React from 'react';
import Movie from '../movies/Movies';
import '../../movie.css';

// const FEATURED_API =
//   'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

export default function MoviesList(props) {
  const { search } = props;

  return (
    <div className="movie-container">
      {search.length > 0 &&
        search.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}
