import React from 'react';

import { EnterpriseForm } from '../../components';

export type EditProps = {
  match: {
    params: {
      name: string;
    };
  };
};

export function Edit(props: EditProps): JSX.Element {
  const name = props.match.params.name;

  return (
    <div id="container">
      <h2 className="edit-title">Editar</h2>
      <EnterpriseForm nameParams={name} />
    </div>
  );
}
