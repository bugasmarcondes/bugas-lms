// import { createStore, applyMiddleware, compose } from "redux";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
//import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
//import thunk from "redux-thunk";

export default function configureStore(initialState) {
  // add support for Redux dev tools
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // reduxImmutableStateInvariant, responsible for warning if we mutate Redux state

  return createStore(
    rootReducer,
    initialState
    //composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
