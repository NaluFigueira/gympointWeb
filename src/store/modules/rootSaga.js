import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import students from './students/sagas';
import plans from './plans/sagas';
import enrollments from './enrollments/sagas';
import helpOrders from './helpOrders/sagas';

export default function* rootSaga() {
  yield all([auth, students, plans, enrollments, helpOrders]);
}
