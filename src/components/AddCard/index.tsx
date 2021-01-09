import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export function AddCard(): JSX.Element {
  return (
    <Link to="/enterprise/register">
      <div id="add-card">
        <FaPlus size={14} />
        <strong>Adicionar Empresa</strong>
      </div>
    </Link>
  );
}
