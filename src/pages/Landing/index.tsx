import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import { EnterpriseCard } from '../../components';

import { Enterprise } from '../../domain/Enterprise';
import { api } from '../../services/api';

export function Landing(): JSX.Element {
  const [enterprise, setEnterprise] = useState<Enterprise[]>([]);

  useEffect(() => {
    api
      .get('', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setEnterprise(data);
        console.log(enterprise);
      })
      .catch((err) => {
        toast.error('Ops, não foi possível realizar a conexão com os dados');
        console.log(err);
      });
  }, [enterprise]);

  return <h1>Lista de empresas</h1>;
}
