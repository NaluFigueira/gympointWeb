import produce from 'immer';

const INITIAL_STATE = {
  helpOrders: [],
};

export default function helpOrders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helpOrders/GET_SUCCESS':
        draft.helpOrders = action.payload.map(helpOrder => {
          return { ...helpOrder, name: helpOrder.student.name };
        });
        break;
      case '@helpOrders/GET_FAILURE':
        draft.helpOrders = [];
        break;
      default:
    }
  });
}
