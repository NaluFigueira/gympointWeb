import produce from 'immer';

const INITIAL_STATE = {
  students: [],
};

export default function students(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@students/GET_SUCCESS':
        draft.students = action.payload;
        break;
      case '@students/GET_FAILURE':
        draft.students = [];
        break;
      default:
    }
  });
}
