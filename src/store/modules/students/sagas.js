import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { getStudentsSuccess, getStudentsFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* getStudents() {
  try {
    const response = yield call(api.get, '/students');
    yield put(getStudentsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    toast.error('Ocorreu um erro ao recuperar os alunos!');
    yield put(getStudentsFailure());
  }
}

export function* createStudent({ payload }) {
  try {
    yield call(api.post, '/students', payload);
    toast.success('Aluno criado com sucesso!');
    history.push('/students');
  } catch (error) {
    console.tron.log(error);
    toast.error(
      'Ocorreu um erro ao criar aluno, verifique os dados inseridos!'
    );
  }
}

export function* editStudent({ payload }) {
  try {
    yield call(api.put, '/students', payload);
    toast.success('Aluno editado com sucesso!');
    history.push('/students');
  } catch (error) {
    console.tron.log(error);
    toast.error(
      'Ocorreu um erro ao editar aluno, verifique os dados inseridos!'
    );
  }
}

export function* deleteStudent({ payload }) {
  try {
    const response = yield call(api.delete, `/students/${payload.id}`);
    toast.success('Aluno removido!');
    yield put(getStudentsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    toast.error('Ocorreu um erro ao remover este aluno!');
  }
}

export default all([
  takeLatest('@students/GET_REQUEST', getStudents),
  takeLatest('@student/CREATE', createStudent),
  takeLatest('@student/EDIT', editStudent),
  takeLatest('@student/DELETE', deleteStudent),
]);
