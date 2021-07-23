import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const userId = localStorage.getItem('USERID');
  const [user, setUser] = useState('');

  const getUser = async () => {
    if (userId !== null) {
      try {
        await axios
          // appel la route de l'utilisateur par son id
          .get(`${process.env.REACT_APP_BACKEND_URL}/connexion/${userId}`)
          .then((response) => {
            console.log(response.data);
            setUser(response.data);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('USERID');
    setUser('');
  };

  return (
    <navbar>
      <div className="navigation">
        {!user ? (
          <div>
            <Link className="link" to="/connexion">
              Sign<span style={{ color: 'red' }}>IN</span>
            </Link>
            <Link className="link" to="/">
              Sign<span style={{ color: 'red' }}>UP</span>
            </Link>
          </div>
        ) : (
          <div>
            <Link className="link" to="/account">
              Mon compte
            </Link>
            <Link className="link-logout" to="/connexion">
              <buton type="button" onClick={handleLogout}>
                Déconnexion
              </buton>
            </Link>
          </div>
        )}
      </div>
    </navbar>
  );
}

export default Header;
