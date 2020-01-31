import React, { useEffect, useState } from 'react';

import Table from '~/components/Table';

import { Container } from './styles';

import AnswerDialog from './AnswerDialog';

export default function HelpOrders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { Id: 0, Name: 'Lennert Nijenbijvank' },
      { Id: 1, Name: 'Sebastian Westergren' },
      { Id: 2, Name: 'Shen Zhi' },
    ]);
  }, []);

  return (
    <Container>
      <AnswerDialog question="Pergunta legal" />
      <div>
        <h2>Pedidos de auxílio</h2>
      </div>
      <Table
        route="help_orders"
        headers={[
          { Id: 0, Name: 'Aluno' },
          { Id: 1, Name: '' },
        ]}
        data={data}
        isHelpOrdersTable
      />
    </Container>
  );
}
