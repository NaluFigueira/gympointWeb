export function getHelpOrdersRequest() {
  return {
    type: '@helpOrders/GET_REQUEST',
  };
}

export function getHelpOrdersSuccess(helpOrders) {
  return {
    type: '@helpOrders/GET_SUCCESS',
    payload: helpOrders,
  };
}

export function getHelpOrdersFailure() {
  return {
    type: '@helpOrders/GET_FAILURE',
  };
}

export function answerHelpOrder(id, answer) {
  return {
    type: '@helpOrders/ANSWER',
    payload: { id, answer },
  };
}
