import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

//creates a redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//mounts the middleware on the Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

//runs the saga
sagaMiddleware.run(rootSaga);

//This is the persisted version of our Store.
const persistor = persistStore(store);

export { store, persistor };
