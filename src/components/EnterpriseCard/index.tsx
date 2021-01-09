import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { convertStringToCnpj } from '../../utils/convertStringToCnpj';

import { api } from '../../services/api';
import { toast } from 'react-toastify';

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
  async function handleClick() {
    try {
      await api.delete(`?text=${name}`);
      console.log(`deletado ${name}`);
      toast.success(`${name} deletada com sucesso !!`);
    } catch (e) {
      toast.error('Não foi possível deletar a empresa :(');
    }
  }

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
        <FaTrash onClick={handleClick} className="fa-cancel" size={24} />
      </div>
    </div>
  );
}
