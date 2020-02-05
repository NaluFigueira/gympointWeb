import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducers';
import students from './students/reducers';
import plans from './plans/reducers';

const reducers = combineReducers({
  auth,
  user,
  students,
  plans,
});

export default reducers;
