import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { getPlansSuccess, getPlansFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* getPlans() {
  try {
    const response = yield call(api.get, '/plans');
    yield put(getPlansSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    toast.error('Ocorreu um erro ao recuperar os planos!');
    yield put(getPlansFailure());
  }
}

export function* createPlan({ payload }) {
  try {
    yield call(api.post, '/plans', payload);
    toast.success('Plano criado com sucesso!');
    history.push('/plans');
  } catch (error) {
    console.tron.log(error);
    toast.error(
      'Ocorreu um erro ao criar plano, verifique os dados inseridos!'
    );
  }
}

export function* editPlan({ payload }) {
  try {
    yield call(api.put, '/plans', payload);
    toast.success('Plano editado com sucesso!');
    history.push('/plans');
  } catch (error) {
    console.tron.log(error);
    toast.error(
      'Ocorreu um erro ao editar Plano, verifique os dados inseridos!'
    );
  }
}

export function* deletePlan({ payload }) {
  try {
    const response = yield call(api.delete, `/plans/${payload.id}`);
    toast.success('Plano removido!');
    yield put(getPlansSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    toast.error('Ocorreu um erro ao remover este Plano!');
  }
}

export default all([
  takeLatest('@plans/GET_REQUEST', getPlans),
  takeLatest('@plan/CREATE', createPlan),
  takeLatest('@plan/EDIT', editPlan),
  takeLatest('@plan/DELETE', deletePlan),
]);
