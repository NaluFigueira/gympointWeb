import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducers';

const reducers = combineReducers({
  auth,
  user,
});

export default reducers;
