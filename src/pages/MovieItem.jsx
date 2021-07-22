import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/movie.css';

function MovieItem() {
  const [createMovie, setCreateMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/account`)
      .then((response) => {
        console.error();
        setCreateMovie(response.data);
      });
  }, []);

  return (
    <div>
      <div className="container-movie-item">
        title={createMovie.title}
        poster_path={createMovie.description}
        overview={createMovie.overview}
        vote_average={createMovie.price}
        key={createMovie.id}
      </div>
    </div>
  );
}

export default MovieItem;
