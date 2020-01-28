import React from 'react';

import ActionsContainer from '~/components/ActionsContainer';
import Table from '~/components/Table';

import { Container } from './styles';

import { formatPrice } from '~/util/format';

export default function PlansList() {
  return (
    <Container>
      <ActionsContainer type="plano" />
      <Table
        headers={[
          { Id: 0, Name: 'Título' },
          { Id: 1, Name: 'Duração', Centered: true },
          { Id: 2, Name: 'Valor p/ mês' },
        ]}
        data={[
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
        ]}
      />
    </Container>
  );
}
