import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from './combineReducers';

import sagas from './combineSagas';

import applicationState from './interfaces';

const bindMiddleware = (middleware: any) => applyMiddleware(...middleware);

function configureStore(initialState: applicationState) {
  const sagaMiddleware = createSagaMiddleware();

  const store: any = createStore(
    reducers,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(sagas);

  return store;
}

export default configureStore;
