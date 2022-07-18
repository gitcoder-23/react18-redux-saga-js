import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

// const middleWares = [createSagaMiddleware()];
const sagaMiddleWare = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  sagaMiddleWare.push(reduxLogger);
}

const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(...middleWares))
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;
