import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { api } from '../../services/api';
// import { maskToCnpj } from '../../utils/maskToCnpj';

import { Enterprise } from '../../domain/Enterprise';

export type EnterpriseFormProps = {
  nameParams?: string;
};

export function EnterpriseForm({
  nameParams,
}: EnterpriseFormProps): JSX.Element {
  const initialData = {
    name: '',
    email: '',
    cnpj: '',
  };

  useEffect(() => {
    async function getEnterprise() {
      try {
        const response = await api.get(`?text=${nameParams}`);
        const data: Enterprise = response.data;

        console.log(data);
        initialData.name = data.name;
        initialData.email = data.email;
        initialData.cnpj = data.cnpj;
      } catch (e) {
        toast.error(
          'Desculpe, Infelizmente não conseguimos realizar uma conexão com a api :( !!',
        );
      }
    }

    if (nameParams) {
      getEnterprise();
    }
  }, []);

  const [name, setName] = useState<string>(initialData.name);
  const [email, setEmail] = useState<string>(initialData.email);
  const [cnpj, setCnpj] = useState<string>(initialData.cnpj);

  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const schemaOne = Yup.object().shape({
        email: Yup.string().required('O campo e-mail precisa ser preenchido'),
        name: Yup.string().required('O campo nome precisa ser preenchido'),
        cnpj: Yup.string().required('O campo CNPJ precisa ser preenchido'),
      });

      await schemaOne.validate({ email, name, cnpj }, { abortEarly: false });

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

      await schemaTwo.validate({ email, name, cnpj }, { abortEarly: false });

      await api.post('', { email, name, cnpj });

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
