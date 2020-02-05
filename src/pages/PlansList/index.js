import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionsContainer from '~/components/ActionsContainer';
import Table from '~/components/Table';

import { Container } from './styles';

import { getPlansRequest, deletePlan } from '~/store/modules/plans/actions';

import history from '~/services/history';

export default function PlansList() {
  const plans = useSelector(state => state.plans.plans);
  const dispatch = useDispatch();
  const [searchedTitle, setSearchedTitle] = useState('');

  useEffect(() => {
    dispatch(getPlansRequest());
  }, [dispatch]);

  const HandleSearch = name => {
    if (name !== searchedTitle) setSearchedTitle(name);
  };

  const HandleDelete = id => {
    dispatch(deletePlan(id));
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
        onDelete={HandleDelete}
        headers={[
          { Id: 0, Title: 'Título', Field: 'title' },
          {
            Id: 1,
            Title: 'Duração (em meses)',
            Field: 'duration',
            Centered: true,
          },
          { Id: 2, Title: 'Valor p/ mês', Field: 'price', Centered: true },
        ]}
        data={
          plans.length > 0
            ? plans.filter(s =>
                s.title.toUpperCase().startsWith(searchedTitle.toUpperCase())
              )
            : []
        }
      />
      {plans.length === 0 && <span>Não há planos para listagem</span>}
    </Container>
  );
}
