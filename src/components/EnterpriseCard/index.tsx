import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { convertStringToCnpj } from '../../utils/convertStringToCnpj';

import { api } from '../../services/api';
import { toast } from 'react-toastify';

import { Enterprise } from '../../domain/Enterprise';

export type EnterpriseCardProps = {
  index: number;
  id: string;
  name: string;
  email: string;
  cnpj: string;
  enterprises: Enterprise[];
  setEnterprises: React.Dispatch<React.SetStateAction<Enterprise[]>>;
};

export function EnterpriseCard({
  id,
  name,
  email,
  cnpj,
  enterprises,
  setEnterprises,
  index,
}: EnterpriseCardProps): JSX.Element {
  async function handleClick() {
    try {
      await api.delete(`/${id}`);

      enterprises.splice(index, 1);
      setEnterprises(enterprises);

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
        <Link to={`/enterprise/${name}/edit/${id}`}>
          <FaEdit className="fa-edit" size={24} />
        </Link>
        <FaTrash onClick={handleClick} className="fa-cancel" size={24} />
      </div>
    </div>
  );
}
