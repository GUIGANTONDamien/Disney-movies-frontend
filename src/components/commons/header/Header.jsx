import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const userId = localStorage.getItem('USERID');
  const [user, setUser] = useState(' ');

  const getUser = async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/utilisateur/${userId}`, {
          userId,
        })
        .then((response) => {
          setUser(response.data[0]);
        });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [user]);
  return (
    <navbar>
      <div className="navigation">
        <Link className="link" to="/connexion">
          Sign<span style={{ color: 'red' }}>IN</span>
        </Link>
        <Link className="link" to="/">
          Sign<span style={{ color: 'red' }}>UP</span>
        </Link>
        <Link className="link" to="/account">
          Mon compte
        </Link>
        <Link className="link-logout" to="/connexion">
          Déconnexion
        </Link>
      </div>
    </navbar>
  );
}

export default Header;
