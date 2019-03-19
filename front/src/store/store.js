import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer/login-reducer";
import thunkMiddleware from "redux-thunk";
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  devTools(applyMiddleware(createLogger(), thunkMiddleware))
);
