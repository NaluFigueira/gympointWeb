import React, { useEffect, useState } from 'react';

import Table from '~/components/Table';

import { Container, DialogContainer } from './styles';

import AnswerDialog from './AnswerDialog';

export default function HelpOrders() {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setData([
      { Id: 0, Name: 'Lennert Nijenbijvank' },
      { Id: 1, Name: 'Sebastian Westergren' },
      { Id: 2, Name: 'Shen Zhi' },
    ]);
  }, []);

  return (
    <>
      {openDialog && (
        <>
          <DialogContainer onClick={() => setOpenDialog(false)} />
          <AnswerDialog
            question="Olá pessoal da academia, gostaria de saber se quando
acordar devo ingerir batata doce e frango logo de
primeira, preparar as marmitas e lotar a geladeira?
Dou um pico de insulina e jogo o hipercalórico?"
          />
        </>
      )}
      <Container>
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
          onClickAnswer={() => setOpenDialog(true)}
        />
      </Container>
    </>
  );
}
