import { produce } from 'immer';

const INITIAL_STATE = {
  info: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.info = action.payload.user;
        break;
      }
      default:
    }
  });
}
