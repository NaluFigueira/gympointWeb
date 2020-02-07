import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Table from '~/components/Table';

import { Container, DialogContainer } from './styles';

import { getHelpOrdersRequest } from '~/store/modules/helpOrders/actions';

import AnswerDialog from './AnswerDialog';

export default function HelpOrders() {
  const [selectedOrder, setSelectedOrder] = useState(-1);
  const dispatch = useDispatch();
  const helpOrders = useSelector(state => state.helpOrders.helpOrders);

  useEffect(() => {
    dispatch(getHelpOrdersRequest());
  }, [dispatch]);

  const getQuestion = id => {
    const helpOrder = helpOrders.find(h => h.id === id);
    if (helpOrder) return helpOrder.question;
    return '';
  };

  const getHelpOrderId = id => {
    const helpOrder = helpOrders.find(h => h.id === id);
    if (helpOrder) return helpOrder.id;
    return -1;
  };

  return (
    <>
      {selectedOrder !== -1 && (
        <>
          <DialogContainer onClick={() => setSelectedOrder(-1)} />
          <AnswerDialog
            question={getQuestion(selectedOrder)}
            id={getHelpOrderId(selectedOrder)}
            onClose={() => setSelectedOrder(-1)}
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
            { Id: 0, Title: 'Aluno', Field: 'name' },
            { Id: 1, Title: '' },
          ]}
          data={helpOrders}
          isHelpOrdersTable
          onClickAnswer={id => setSelectedOrder(id)}
        />
      </Container>
    </>
  );
}
