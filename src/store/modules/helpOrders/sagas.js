import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { getHelpOrdersSuccess, getHelpOrdersFailure } from './actions';

import api from '~/services/api';

export function* getHelpOrders() {
  try {
    const response = yield call(api.get, '/students/help-orders');
    yield put(getHelpOrdersSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    toast.error('Ocorreu um erro ao recuperar os alunos!');
    yield put(getHelpOrdersFailure());
  }
}

export function* answerHelpOrder({ payload }) {
  try {
    const { id, answer } = payload;
    yield call(api.post, `/students/help-orders/${id}/answer`, { answer });
    toast.success('A resposta foi enviada ao aluno!');
    const response = yield call(api.get, '/students/help-orders');
    yield put(getHelpOrdersSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    toast.error('Ocorreu um erro ao responder o pedido de auxílio!');
  }
}

export default all([
  takeLatest('@helpOrders/GET_REQUEST', getHelpOrders),
  takeLatest('@helpOrders/ANSWER', answerHelpOrder),
]);
