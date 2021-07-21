import React from 'react';
import MoviesList from '../components/commons/movies-list/MoviesList';
import Header from '../components/commons/header/Header';
import '../components/movie.css';

export default function HomePage() {
  return (
    <div className="container">
      <Header />
      <MoviesList />
    </div>
  );
}
