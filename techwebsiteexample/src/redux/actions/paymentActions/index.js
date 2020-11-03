import { PAYMENT_SUBMITTED } from "../../types";
export function paymentSubmitted() {
  return {
    type: PAYMENT_SUBMITTED,
  };
}
