/* eslint-disable react/prop-types */
import React from 'react';
import Movie from '../movies/Movies';
import '../../movie.css';

export default function MoviesList(props) {
  const { search } = props;

  return (
    <div className="movie-container">
      {search.length > 0 &&
        search.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}
