import React from 'react';

export type EnterpriseCardProps = {
  name: string;
  email: string;
  cnpj: string;
};

export function EnterpriseCard({
  name,
  email,
  cnpj,
}: EnterpriseCardProps): JSX.Element {
  return (
    <li>
      {name}
      <br />
      {email}
      <br />
      {cnpj}
      <br />
    </li>
  );
}
