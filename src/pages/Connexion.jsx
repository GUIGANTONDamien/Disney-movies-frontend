import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/commons/header/Header';
import './inscription.css';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/connexion`, {
        email,
        password,
      })
      .then((results) => {
        localStorage.setItem('USERID', results.data.id);
        // localStorage.setItem('TOKEN', results.data.token);
      })
      .then(() => history.push('/home'));
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
              Sign<span style={{ color: 'red' }}>IN</span>
            </h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="container-input">
                <div>
                  <h3>Email</h3>
                </div>
                <div>
                  <input
                    id="email"
                    className="form-group"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleEmail}
                  />
                </div>
                <hr />
              </div>
              <div>
                <div>
                  <h3>Password</h3>
                </div>
                <div>
                  <input
                    id="password"
                    placeholder="****************** "
                    className="form-group"
                    name="password"
                    type="text"
                    onChange={handlePassword}
                  />
                </div>
                <hr />
              </div>
              <div className="container-button">
                <input className="submit" type="submit" value="Se connecter" />
              </div>
            </form>
            <Link className="text-route" to="/">
              <p>Pas de compte ? Inscrivez-vous.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
