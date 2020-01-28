import React from 'react';

import ActionsContainer from '~/components/ActionsContainer';
import Table from '~/components/Table';

import { Container } from './styles';

export default function StudentsList() {
  return (
    <Container>
      <ActionsContainer type="aluno" />
      <Table
        headers={[
          { Id: 0, Name: 'Nome' },
          { Id: 1, Name: 'E-mail' },
          { Id: 2, Name: 'Idade' },
        ]}
        data={[
          {
            Id: 0,
            Nome: 'Cha Ji-Hun',
            Email: 'example@rocketseat.com.br',
            Idade: 20,
          },
          {
            Id: 1,
            Nome: 'Darius Cummings',
            Email: 'example@rocketseat.com.br',
            Idade: 18,
          },
          {
            Id: 2,
            Nome: 'Carmelita Marsham',
            Email: 'example@rocketseat.com.br',
            Idade: 32,
          },
          {
            Id: 3,
            Nome: 'Cha Ji-Hun',
            Email: 'example@rocketseat.com.br',
            Idade: 20,
          },
          {
            Id: 4,
            Nome: 'Darius Cummings',
            Email: 'example@rocketseat.com.br',
            Idade: 18,
          },
          {
            Id: 5,
            Nome: 'Carmelita Marsham',
            Email: 'example@rocketseat.com.br',
            Idade: 32,
          },
          {
            Id: 6,
            Nome: 'Cha Ji-Hun',
            Email: 'example@rocketseat.com.br',
            Idade: 20,
          },
          {
            Id: 7,
            Nome: 'Darius Cummings',
            Email: 'example@rocketseat.com.br',
            Idade: 18,
          },
          {
            Id: 8,
            Nome: 'Carmelita Marsham',
            Email: 'example@rocketseat.com.br',
            Idade: 32,
          },
          {
            Id: 9,
            Nome: 'Cha Ji-Hun',
            Email: 'example@rocketseat.com.br',
            Idade: 20,
          },
          {
            Id: 10,
            Nome: 'Darius Cummings',
            Email: 'example@rocketseat.com.br',
            Idade: 18,
          },
          {
            Id: 11,
            Nome: 'Carmelita Marsham',
            Email: 'example@rocketseat.com.br',
            Idade: 32,
          },
        ]}
      />
    </Container>
  );
}
