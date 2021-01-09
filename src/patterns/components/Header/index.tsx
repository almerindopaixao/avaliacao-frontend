import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBuromobelexperte, FaCog } from 'react-icons/fa';

import Logo from '../../../assets/img/logo-conecti.svg';

export function Header(): JSX.Element {
  const sizeSvgs = 24;

  return (
    <header id="header-container">
      <Link to="/">
        <img src={Logo} alt="Logo Conecti" />
      </Link>

      <div className="data-of-user-container">
        <p>Almerindo Paixão</p>
        <FaUser size={sizeSvgs} />
        <FaCog size={sizeSvgs} />
        <FaBuromobelexperte className="last" size={sizeSvgs} />
      </div>
    </header>
  );
}
