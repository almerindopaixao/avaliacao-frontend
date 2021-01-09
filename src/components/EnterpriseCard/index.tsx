import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { convertStringToCnpj } from '../../utils/convertStringToCnpj';

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
    <div id="card">
      <div>
        <h2>{name}</h2>
        <p>
          CNPJ: {convertStringToCnpj(cnpj)} | e-mail: {email}
        </p>
      </div>
      <div>
        <Link to={`/enterprise/${name}/edit`}>
          <FaEdit className="fa-edit" size={24} />
        </Link>
        <FaTrash className="fa-cancel" size={24} />
      </div>
    </div>
  );
}
