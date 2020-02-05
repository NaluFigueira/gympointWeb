import produce from 'immer';

const INITIAL_STATE = {
  plans: [],
};

export default function plans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plans/GET_SUCCESS':
        console.tron.log(action.payload);
        draft.plans = action.payload;
        console.tron.log(draft.plans);
        break;
      case '@plans/GET_FAILURE':
        console.tron.log('falhou');
        draft.plans = [];
        break;
      default:
    }
  });
}
