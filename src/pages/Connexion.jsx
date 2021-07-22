import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
        localStorage.setItem('USERID', results.data.user.id);
        localStorage.setItem('TOKEN', results.data.token);
      })
      .then(() => history.push('/'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          label="Email :"
          name="email"
          type="email"
          onChange={handleEmail}
          placeholder=" E-mail "
          required
        />
        <input
          label="Password :"
          name="password"
          type="text"
          onChange={handlePassword}
          placeholder=" Mot de passe  "
          required
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
