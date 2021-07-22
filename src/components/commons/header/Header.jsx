import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <navbar>
      <div className="navigation">
        <Link className="link" to="/connexion">
          Se connecter
        </Link>
        <Link className="link" to="/inscription">
          S&apos;enregistrer
        </Link>
        <Link className="link" to="/account">
          Mon compte
        </Link>
        <Link className="link-logout" to="/logout">
          Déconnexion
        </Link>
      </div>
    </navbar>
  );
}

export default Header;
