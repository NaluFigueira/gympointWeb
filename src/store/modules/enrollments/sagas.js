import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { getEnrollmentsSuccess, getEnrollmentsFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* getEnrollments() {
  try {
    const response = yield call(api.get, '/enrollments');
    yield put(getEnrollmentsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    toast.error('Ocorreu um erro ao recuperar as matrículas!');
    yield put(getEnrollmentsFailure());
  }
}

export function* createEnrollment({ payload }) {
  try {
    yield call(api.post, '/enrollments', payload);
    toast.success('Matrícula criada com sucesso!');
    history.push('/enrollments');
  } catch (error) {
    console.tron.log(error);
    toast.error(
      'Ocorreu um erro ao criar matrícula, verifique os dados inseridos!'
    );
  }
}

export function* editEnrollment({ payload }) {
  try {
    yield call(api.put, '/enrollments', payload);
    toast.success('Matrícula editada com sucesso!');
    history.push('/enrollments');
  } catch (error) {
    console.tron.log(error);
    toast.error(
      'Ocorreu um erro ao editar matrícula, verifique os dados inseridos!'
    );
  }
}

export function* deleteEnrollment({ payload }) {
  try {
    const response = yield call(api.delete, `/enrollments/${payload.id}`);
    toast.success('Matrícula cancelada!');
    yield put(getEnrollmentsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    toast.error('Ocorreu um erro ao cancelar este matrícula!');
  }
}

export default all([
  takeLatest('@enrollments/GET_REQUEST', getEnrollments),
  takeLatest('@enrollment/CREATE', createEnrollment),
  takeLatest('@enrollment/EDIT', editEnrollment),
  takeLatest('@enrollment/DELETE', deleteEnrollment),
]);
