import { all, takeLatest, put, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });
    const { name, token } = response.data;
    const adminEmail = response.data.email;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, { email: adminEmail, name }));

    history.push('students');
  } catch (error) {
    console.tron.log(error);
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signInFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
