/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../../movie.css';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

export default function HeaderSearch(props) {
  const { setSearch } = props;
  const [inputSearch, setInputSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearch) {
      // 1. appel l'api de recherche + le state de l'input
      fetch(SEARCH_API + inputSearch)
        // 2. récupère la réponse de l'API en json
        .then((res) => {
          return res.json();
        })
        // 3. une fois la réponse de l'API disponible, l'envoie dans le state (note : data peut etre changer en n'importe quoi)
        .then((data) => {
          setSearch(data.results);
        });
      // renvoi la target du champs à vide lorsque la recherche est effectuer.
      setInputSearch('');
    }
  };

  return (
    <header>
      <div className="title-header">MOVIES</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}

// créer une table mise à jour avec des dates date la plus récentes + 7 jours = lancement mise à jour
// mise à jour = appel d'api pour connaitre le nombre de pages + boucle sur toutes les pages avec insert into pour envoi vers la bdd.
// modifier le state search pour qu'il récupére les données de la base de données. (objectif : limiter le nombre d'appel à une api)
// faire coincider les champs de la bdd avec les propriétés de l'api.
