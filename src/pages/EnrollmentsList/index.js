import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ActionsContainer from '~/components/ActionsContainer';
import Table from '~/components/Table';

import { Container } from './styles';
import {
  getEnrollmentsRequest,
  deleteEnrollment,
} from '~/store/modules/enrollments/actions';

import history from '~/services/history';

export default function EnrollmentsList() {
  const enrollments = useSelector(state => state.enrollments.enrollments).map(
    enrollment => {
      return {
        id: enrollment.id,
        name: enrollment.student.name,
        title: enrollment.plan.title,
        start_date: enrollment.start_date,
        end_date: enrollment.end_date,
        active: enrollment.active,
        price: enrollment.price,
        plan: enrollment.plan,
        student: enrollment.student,
      };
    }
  );
  const dispatch = useDispatch();
  const [searchedName, setSearchedName] = useState('');

  useEffect(() => {
    dispatch(getEnrollmentsRequest());
  }, [dispatch]);

  const HandleSearch = name => {
    if (name !== searchedName) setSearchedName(name);
  };

  const HandleDelete = id => {
    dispatch(deleteEnrollment(id));
  };

  return (
    <Container>
      <ActionsContainer
        name="matrícula"
        onClick={() => history.push('/enrollment/register')}
        onChange={HandleSearch}
      />
      <Table
        route="enrollment"
        onDelete={HandleDelete}
        headers={[
          { Id: 0, Title: 'Aluno', Field: 'name' },
          { Id: 1, Title: 'Plano', Field: 'title', Centered: true },
          { Id: 2, Title: 'Início', Field: 'start_date', Centered: true },
          { Id: 3, Title: 'Término', Field: 'end_date', Centered: true },
          { Id: 4, Title: 'Ativa', Field: 'active', Centered: true },
        ]}
        data={
          enrollments.length > 0
            ? enrollments.filter(student =>
                student.name
                  .toUpperCase()
                  .startsWith(searchedName.toUpperCase())
              )
            : []
        }
      />
      {enrollments.length === 0 && <span>Não há matrículas para listagem</span>}
    </Container>
  );
}
