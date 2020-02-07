import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducers';
import students from './students/reducers';
import plans from './plans/reducers';
import enrollments from './enrollments/reducers';
import helpOrders from './helpOrders/reducers';

const reducers = combineReducers({
  auth,
  user,
  students,
  plans,
  enrollments,
  helpOrders,
});

export default reducers;
