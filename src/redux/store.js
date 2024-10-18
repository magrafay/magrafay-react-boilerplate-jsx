import { thunk } from "redux-thunk";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import promiseMiddleware from "redux-promise-middleware";
import monitorReducersEnhancer from "../_config/monitor-reducer";
import loggerMiddleware from "../_config/logger-middleware";
import rootReducer from "./reducer/rootReducer";
// import errorMiddleware from "../_config/error-middleware";

export default function configureStore(preloadedState) {
  const middlewares = [
    thunk,
    // errorMiddleware,
    loggerMiddleware,
    promiseMiddleware,
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const reducer = persistReducer(
    {
      key: "root",
      storage,
    },
    rootReducer
  );

  const store = createStore(reducer, preloadedState, composedEnhancers);

  if (process.env.REACT_APP_ENV !== "production" && module.hot) {
    module.hot.accept({ reducer }, () => store.replaceReducer(reducer));
  }

  return store;
}
