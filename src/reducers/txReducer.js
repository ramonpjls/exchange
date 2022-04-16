import { types } from "../types/types";

const initialState = {
  transaction: [],
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TRANSACTION:
      return { ...state, transaction: action.payload };
    default:
      return state;
  }
};
