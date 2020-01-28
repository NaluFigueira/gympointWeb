import React from 'react';

import ActionsContainer from '~/components/ActionsContainer';
import Table from '~/components/Table';

import { Container } from './styles';

export default function EnrollmentsList() {
  return (
    <Container>
      <ActionsContainer type="matrícula" />
      <Table
        headers={[
          { Id: 0, Name: 'Aluno' },
          { Id: 1, Name: 'Plano', Centered: true },
          { Id: 2, Name: 'Início', Centered: true },
          { Id: 3, Name: 'Término', Centered: true },
          { Id: 4, Name: 'Ativa' },
        ]}
        data={[
          {
            Id: 0,
            Aluno: 'Lennert Nijenbijvank',
            Plano: 'Start',
            Inicio: '30 de Abril de 2019',
            Termino: '30 de Maio de 2019',
            Ativa: true,
          },
          {
            Id: 1,
            Aluno: 'Sebastian Westergren',
            Plano: 'Diamond',
            Inicio: '14 de Outubro de 2019',
            Termino: '14 de Abril de 2020',
            Ativa: false,
          },
        ]}
      />
    </Container>
  );
}
