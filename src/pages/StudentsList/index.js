import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ActionsContainer from '~/components/ActionsContainer';
import Table from '~/components/Table';

import {
  getStudentsRequest,
  deleteStudent,
} from '~/store/modules/students/actions';

import history from '~/services/history';

import { Container } from './styles';

export default function StudentsList() {
  const [searchedName, setSearchedName] = useState('');
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentsRequest());
  }, [dispatch]);

  const HandleSearch = name => {
    if (name !== searchedName) setSearchedName(name);
  };

  const HandleDelete = id => {
    dispatch(deleteStudent(id));
  };

  return (
    <Container>
      <ActionsContainer
        name="aluno"
        onClick={() => history.push('/student/register')}
        onChange={HandleSearch}
      />
      <Table
        route="student"
        onDelete={HandleDelete}
        headers={[
          { id: 0, Title: 'Nome', Field: 'name' },
          { id: 1, Title: 'E-mail', Field: 'email' },
          { id: 2, Title: 'Idade', Field: 'age', Centered: true },
        ]}
        data={
          students.length > 0
            ? students.filter(student =>
                student.name
                  .toUpperCase()
                  .startsWith(searchedName.toUpperCase())
              )
            : []
        }
      />
      {students.length === 0 && <span>Não há alunos para listagem</span>}
    </Container>
  );
}
