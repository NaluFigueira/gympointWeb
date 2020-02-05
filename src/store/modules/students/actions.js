export function getStudentsRequest() {
  return {
    type: '@students/GET_REQUEST',
  };
}

export function getStudentsSuccess(students) {
  return {
    type: '@students/GET_SUCCESS',
    payload: students,
  };
}

export function getStudentsFailure() {
  return {
    type: '@students/GET_FAILURE',
  };
}

export function createStudent({ name, email, age, weight, height }) {
  return {
    type: '@student/CREATE',
    payload: {
      name,
      email,
      age,
      weight,
      height,
    },
  };
}

export function editStudent({ id, name, email, age, weight, height }) {
  return {
    type: '@student/EDIT',
    payload: {
      id,
      name,
      email,
      age,
      weight,
      height,
    },
  };
}

export function deleteStudent(id) {
  return {
    type: '@student/DELETE',
    payload: { id },
  };
}
