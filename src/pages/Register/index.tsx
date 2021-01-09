import React from 'react';

import { EnterpriseForm, BackButton } from '../../components';

export function Register(): JSX.Element {
  return (
    <main id="container">
      <h2 className="register-title">Cadastro</h2>
      <EnterpriseForm />
      <BackButton />
    </main>
  );
}
