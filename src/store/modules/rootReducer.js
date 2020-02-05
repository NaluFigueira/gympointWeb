import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducers';
import students from './students/reducers';

const reducers = combineReducers({
  auth,
  user,
  students,
});

export default reducers;
