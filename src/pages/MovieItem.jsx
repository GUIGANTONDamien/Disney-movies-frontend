import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/movie.css';

function MovieItem() {
  const [createMovie, setCreateMovie] = useState([]);
  useEffect(async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/`)
      .then((response) => {
        setCreateMovie(response.data);
      });
  }, []);

  return (
    <div>
      {!createMovie ? (
        <p />
      ) : (
        createMovie.map((element) => (
          <div key={element.id}>
            <p>{element.title}</p>
            <p>{element.poster_path}</p>
            <p>{element.overview}</p>
            <p>{element.vote_average}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieItem;
