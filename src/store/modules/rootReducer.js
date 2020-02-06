import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducers';
import students from './students/reducers';
import plans from './plans/reducers';
import enrollments from './enrollments/reducers';

const reducers = combineReducers({
  auth,
  user,
  students,
  plans,
  enrollments,
});

export default reducers;
