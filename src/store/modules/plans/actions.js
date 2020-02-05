export function getPlansRequest() {
  return {
    type: '@plans/GET_REQUEST',
  };
}

export function getPlansSuccess(plans) {
  return {
    type: '@plans/GET_SUCCESS',
    payload: plans,
  };
}

export function getPlansFailure() {
  return {
    type: '@plans/GET_FAILURE',
  };
}

export function createPlan({ title, duration, price }) {
  return {
    type: '@plan/CREATE',
    payload: {
      title,
      duration,
      price,
    },
  };
}

export function editPlan({ id, title, duration, price }) {
  return {
    type: '@plan/EDIT',
    payload: {
      id,
      title,
      duration,
      price,
    },
  };
}

export function deletePlan(id) {
  return {
    type: '@plan/DELETE',
    payload: { id },
  };
}
