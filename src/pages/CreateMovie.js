import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import FormInput from '../components/commons/FormInput';
import Header from '../components/commons/header/Header';
import './inscription.css';

function CreateMovie() {
  const [movie, setMovie] = useState({
    title: '',
    poster_path: '',
    overview: '',
    vote_average: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', movie.title);
    formData.append('poster_path', movie.poster_path);
    formData.append('overview', movie.overview);
    formData.append('vote_average', movie.vote_average);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/account`,
        movie,
        formData,
        config
      )
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Film ajoutée avec succès!',
            showConfirmButton: false,
            timer: 3000,
          })
        );
      })
      .catch(
        (error) => JSON.stringify(error),
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Veuillez vérifier les informations saisies',
          showConfirmButton: false,
          timer: 3000,
        })
      );
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Header />
      <img
        className="cinema"
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="cinema"
      />
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Ajouter votre film</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="container-input">
                <div>
                  <FormInput
                    id="title"
                    className="form-group"
                    name="title"
                    type="text"
                    placeholder="Title of movie"
                    value={movie}
                    setValue={setMovie}
                  />
                </div>
                <hr />
              </div>
              <div>
                <div>
                  <FormInput
                    id="poster_path"
                    placeholder="Your poster_path"
                    className="form-group"
                    name="poster_path"
                    type="file"
                    value={movie}
                    setValue={setMovie}
                  />
                </div>
                <hr />
              </div>
              <div>
                <div>
                  <FormInput
                    id="vote_average"
                    placeholder="Your vote"
                    className="form-group"
                    name="vote_average"
                    type="text"
                    value={movie}
                    setValue={setMovie}
                  />
                </div>
                <hr />
              </div>
              <div>
                <div>
                  <textarea
                    id="overview"
                    placeholder="Your overview"
                    className="form-group"
                    name="overview"
                    type="text"
                    value={movie}
                    setValue={setMovie}
                    onChange={(event) => setMovie(event.target.value)}
                  />
                </div>
                <hr />
              </div>
              <div className="container-button">
                <input className="submit" type="submit" value="Ajouter" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMovie;
