/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import FormInput from '../components/commons/FormInput';
import Header from '../components/commons/header/Header';
import './inscription.css';

export default function Inscription() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/`, user)
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Votre compte a été créé',
          })
        );
      })
      .catch(
        (error) => JSON.stringify(error),
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Veuillez vérifier les informations saisies',
        })
      )
      .then(() => history.push('/connexion'));
  };

  return (
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
            <h2 className="form-title">
              Sign<span style={{ color: 'red' }}>UP</span>
            </h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="container-input">
                <div>
                  <h3>Email</h3>
                </div>
                <div>
                  <FormInput
                    className="form-group"
                    name="email"
                    type="email"
                    placeholder="love@movie.com"
                    value={user}
                    setValue={setUser}
                  />
                </div>
                <hr />
              </div>
              <div>
                <div>
                  <h3>Password</h3>
                </div>
                <div>
                  <FormInput
                    placeholder="****************** "
                    className="form-group"
                    name="password"
                    type="text"
                    value={user}
                    setValue={setUser}
                  />
                </div>
                <hr />
              </div>
              <div className="container-button">
                <input className="submit" type="submit" value="S'incrire" />
              </div>
            </form>
            <Link className="text-route" to="/connexion">
              <p>Déjà inscrit ? Connectez-vous</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
