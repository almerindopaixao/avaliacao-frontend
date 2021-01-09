import React from 'react';
// import { toast } from 'react-toastify';
// import { EnterpriseCard } from '../../components';

// import { Enterprise } from '../../domain/Enterprise';
// import { api } from '../../services/api';

import { EnterpriseCard } from '../../components';

export function Landing(): JSX.Element {
  /*
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
  */

  return (
    <main id="landing-container">
      <EnterpriseCard
        name="Empresa 1"
        email="empresa1@teste.com.br"
        cnpj="64385518000173"
      />

      <EnterpriseCard
        name="Empresa 2"
        email="empresa2@teste.com.br"
        cnpj="31287325000120"
      />

      <EnterpriseCard
        name="Empresa 3"
        email="empresa3@teste.com.br"
        cnpj="75046113000127"
      />
    </main>
  );
}
