import React from 'react';

import { BackButton } from '../../components';

export function Page404(): JSX.Element {
  return (
    <main id="page404-container">
      <h3 className="page404-title">Página não encontrada</h3>;
      <BackButton />
    </main>
  );
}
