import React from 'react';

import Logo from '../../../assets/img/logo-conecti.svg';

export function Header(): JSX.Element {
  return (
    <header id="header-container">
      <img src={Logo} alt="Logo Conecti" />
    </header>
  );
}
