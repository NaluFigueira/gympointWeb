import produce from 'immer';

const INITIAL_STATE = {
  enrollments: [],
};

export default function students(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollments/GET_SUCCESS':
        draft.enrollments = action.payload;
        break;
      case '@enrollments/GET_FAILURE':
        draft.enrollments = [];
        break;
      default:
    }
  });
}
