import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { balanceReducer } from "../reducers/balanceReducer";
import { transactionReducer } from "../reducers/txReducer";

const reducers = combineReducers({
  balance: balanceReducer,
  transaction: transactionReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
