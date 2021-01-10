import React from 'react';

import { EnterpriseForm, BackButton } from '../../components';

export type EditProps = {
  match: {
    params: {
      name: string;
      id: string;
    };
  };
};

export function Edit(props: EditProps): JSX.Element {
  const name = props.match.params.name;
  const id = props.match.params.id;

  return (
    <main id="container">
      <h2 className="edit-title">Editar</h2>
      <EnterpriseForm idParams={id} nameParams={name} />
      <BackButton />
    </main>
  );
}
