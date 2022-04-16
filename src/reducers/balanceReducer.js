import { types } from "../types/types";

const initialState = {
  balance: {},
};

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BALANCE:
      return { ...state, balance: action.payload };
    default:
      return state;
  }
};
