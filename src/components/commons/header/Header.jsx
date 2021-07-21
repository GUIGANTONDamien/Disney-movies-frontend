import React from 'react';
import '../../movie.css';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

export default function Header() {
  const [setMovies] = React.useState([]);
  const [searchMovie, setSearchMovie] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchMovie) {
      fetch(SEARCH_API + searchMovie)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
      setSearchMovie('');
    }
  };

  const handleChange = (e) => {
    setSearchMovie(e.target.value);
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
            value={searchMovie}
            onChange={handleChange}
          />
        </form>
      </div>
    </header>
  );
}
