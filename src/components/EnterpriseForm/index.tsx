import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { api } from '../../services/api';
// import { maskToCnpj } from '../../utils/maskToCnpj';
// import { convertStringToCnpj } from '../../utils/convertStringToCnpj';
import { Enterprise } from '../../domain/Enterprise';

export type EnterpriseFormProps = {
  nameParams?: string;
};

export function EnterpriseForm({
  nameParams,
}: EnterpriseFormProps): JSX.Element {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');

  useEffect(() => {
    async function getEnterprise() {
      try {
        const response = await api.get(`?text=${nameParams}`);
        const data: Enterprise[] = response.data;

        setName(data[0].name);
        setEmail(data[0].email);
        setCnpj(data[0].cnpj);
      } catch (e) {
        history.push('*');
      }
    }

    if (nameParams) {
      getEnterprise();
    }
  }, []);

  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const schemaOne = Yup.object().shape({
        email: Yup.string().required('O campo e-mail precisa ser preenchido'),
        name: Yup.string().required('O campo nome precisa ser preenchido'),
        cnpj: Yup.string().required('O campo CNPJ precisa ser preenchido'),
      });

      const schemaTwo = Yup.object().shape({
        email: Yup.string().email('O e-mail informado é informado'),
        name: Yup.string()
          .max(20, 'O nome informado deve conter entre 3 a 20 caracteres')
          .min(4, 'O nome informado deve conter entre 2 a 20 caracteres'),
        cnpj: Yup.string().length(
          14,
          'O CNPJ informado deve conter 14 caracteres',
        ),
      });

      await schemaOne.validate({ email, name, cnpj }, { abortEarly: false });

      if (!Number(cnpj))
        throw new Yup.ValidationError('O CNPJ só pode conter números');

      await schemaTwo.validate({ email, name, cnpj }, { abortEarly: false });

      nameParams
        ? await api.put('', { email, name, cnpj })
        : await api.post('', { email, name, cnpj });

      toast.success('Empresa cadastrada com sucesso');

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.errors.forEach((error: string) => {
          toast.error(error);
        });
      }

      if (err.response) {
        err.response.data.errors.forEach((error: string) => {
          toast.error(error);
        });
      }

      if (err.isAxiosError) {
        toast.error('Deculpe, Não conseguimos acessar a API :( !!');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da empresa"
        />
      </label>

      <label htmlFor="email">
        E-mail:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail da empresa"
        />
      </label>

      <label htmlFor="cnpj">
        CNPJ:
        <input
          type="text"
          maxLength={14}
          id="cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          placeholder="CNPJ da Empresa"
        />
      </label>

      <button className="button-submit" type="submit">
        {nameParams ? 'Salvar' : 'Cadastrar Empresa'}
      </button>
    </form>
  );
}
