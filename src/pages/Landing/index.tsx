import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Enterprise } from '../../domain/Enterprise';
import { api } from '../../services/api';

import { EnterpriseCard, AddCard, Spinner } from '../../components';

export function Landing(): JSX.Element {
  const [requestFinish, setRequestFinish] = useState<boolean>(false);
  const [enterprises, setEnterprises] = useState<Enterprise[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get('');
        const data = response.data;
        setEnterprises(data);
        setRequestFinish(true);
      } catch (err) {
        toast.error('Ops, não foi possível realizar a conexão com os dados');
      }
    }

    getData();
  }, []);

  return (
    <main id="landing-container">
      <AddCard />
      {requestFinish ? (
        enterprises.map((enterprise) => {
          return (
            <EnterpriseCard
              key={enterprise.id}
              name={enterprise.name}
              email={enterprise.email}
              cnpj={enterprise.cnpj}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </main>
  );
}
