import React, { useState, useEffect } from 'react';

import ActionsContainer from '~/components/ActionsContainer';
import Table from '~/components/Table';

import { Container } from './styles';

import { formatPrice } from '~/util/format';

import history from '~/services/history';

export default function PlansList() {
  const [data, setData] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState('');
  useEffect(() => {
    setData([
      {
        Id: 0,
        Titulo: 'Start',
        Duracao: '1 mês',
        Valor: formatPrice(129),
      },
      {
        Id: 1,
        Titulo: 'Gold',
        Duracao: '3 meses',
        Valor: formatPrice(109),
      },
      {
        Id: 2,
        Titulo: 'Diamond',
        Duracao: '6 meses',
        Valor: formatPrice(89),
      },
    ]);
  }, []);

  const HandleSearch = name => {
    if (name !== searchedTitle) setSearchedTitle(name);
  };

  return (
    <Container>
      <ActionsContainer
        name="plano"
        onClick={() => history.push('/plan/register')}
        onChange={HandleSearch}
      />
      <Table
        route="plan"
        headers={[
          { Id: 0, Name: 'Título' },
          { Id: 1, Name: 'Duração', Centered: true },
          { Id: 2, Name: 'Valor p/ mês', Centered: true },
        ]}
        data={data.filter(s =>
          s.Titulo.toUpperCase().startsWith(searchedTitle.toUpperCase())
        )}
      />
    </Container>
  );
}
