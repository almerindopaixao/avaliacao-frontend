import React, { useState, useEffect, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

import { toast } from 'react-toastify';

import { api } from '../../services/api';

import { Enterprise } from '../../domain/Enterprise';

export type SearchProps = {
  setEnterprise: React.Dispatch<React.SetStateAction<Enterprise[]>>;
  setRequestFinish: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Search({
  setEnterprise,
  setRequestFinish,
}: SearchProps): JSX.Element {
  const [name, setName] = useState<string>('');
  const [suggestions, setSugestions] = useState<Enterprise[]>([]);

  const hasSuggestions = Boolean(suggestions.length);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get('');
        const data = response.data;
        setSugestions(data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  async function handleSubmitSearch(e: FormEvent) {
    e.preventDefault();

    try {
      setRequestFinish(false);

      const response = await api.get(`?text=${name}`);
      const data: Enterprise[] = response.data;

      setEnterprise(data);
      setRequestFinish(true);
    } catch (e) {
      toast.error('Desculpe, não conseguimos realizar a busca no momento');
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmitSearch} className="search-box">
      <input
        type="text"
        placeholder="Buscar Empresa"
        value={name}
        onChange={(e) => setName(e.target.value)}
        list="suggestions-for-search"
        autoComplete={hasSuggestions ? 'off' : 'on'}
      />

      {hasSuggestions && (
        <datalist id="suggestions-for-search">
          {suggestions.map((suggestion) => (
            <option key={suggestion.id} value={suggestion.name}>
              {suggestion.name}
            </option>
          ))}
        </datalist>
      )}

      <button type="submit">
        <FaSearch size={18} />
      </button>
    </form>
  );
}
