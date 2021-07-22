import React from 'react';
import MoviesList from '../components/commons/movies-list/MoviesList';
import Header from '../components/commons/header/Header';
import '../components/movie.css';
import HeaderSearch from '../components/commons/header/HeaderSearch';

const API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

// appel de l'api

export default function HomePage() {
  const [search, setSearch] = React.useState('');
  // Créaion d'un state qui fait appel à l'api

  React.useEffect(() => {
    // 1. appel l'api
    fetch(API)
      // 2. récupère la réponse de l'API en json
      .then((res) => res.json())
      // 3. une fois la réponse de l'API disponible, l'envoie dans le state (note : data peut etre changer en n'importe quoi)
      .then((data) => {
        setSearch(data.results);
      });
    // [] dire au useEffect qu'il ne doit se déclencher qu'au montage du component
  }, []);

  return (
    <div className="container">
      <Header />
      <HeaderSearch setSearch={setSearch} />
      <MoviesList search={search} />
    </div>
  );
}
