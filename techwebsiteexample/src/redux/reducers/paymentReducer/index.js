import { PAYMENT_SUBMITTED } from "../../types";

const INTIAL_STATE = {
  isPaid: false,
};

function paymentReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case PAYMENT_SUBMITTED:
      return { isPaid: true };
    default:
      return state;
  }
}

export default paymentReducer;
