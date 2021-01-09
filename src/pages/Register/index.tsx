import React from 'react';

import { EnterpriseForm } from '../../components';

export function Register(): JSX.Element {
  return (
    <div id="container">
      <h2 className="register-title">Cadastro</h2>
      <EnterpriseForm />
    </div>
  );
}
