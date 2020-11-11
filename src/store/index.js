import { createStore, applyMiddleware, compose } from "redux";
import reducersito from "../reducers/";
import thunk from "redux-thunk";

const store = createStore(
    reducersito,
    applyMiddleware(thunk)
  );

export default store;