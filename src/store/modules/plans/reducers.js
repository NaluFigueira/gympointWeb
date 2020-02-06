import produce from 'immer';

const INITIAL_STATE = {
  plans: [],
};

export default function plans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plans/GET_SUCCESS':
        draft.plans = action.payload;
        break;
      case '@plans/GET_FAILURE':
        draft.plans = [];
        break;
      default:
    }
  });
}
