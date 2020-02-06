export function getEnrollmentsRequest() {
  return {
    type: '@enrollments/GET_REQUEST',
  };
}

export function getEnrollmentsSuccess(enrollments) {
  return {
    type: '@enrollments/GET_SUCCESS',
    payload: enrollments,
  };
}

export function getEnrollmentsFailure() {
  return {
    type: '@enrollments/GET_FAILURE',
  };
}

export function createEnrollment({ student_id, plan_id, start_date }) {
  return {
    type: '@enrollment/CREATE',
    payload: { student_id, plan_id, start_date },
  };
}

export function editEnrollment({ id, plan_id, start_date }) {
  return {
    type: '@enrollment/EDIT',
    payload: {
      id,
      plan_id,
      start_date,
    },
  };
}

export function deleteEnrollment(id) {
  return {
    type: '@enrollment/DELETE',
    payload: { id },
  };
}
