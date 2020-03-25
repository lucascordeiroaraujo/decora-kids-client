import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from './ducks/combineReducers';

import sagas from './ducks/combineSagas';

import ApplicationState from './interfaces';

const bindMiddleware = (middleware: any) => applyMiddleware(...middleware);

function configureStore(initialState: ApplicationState) {
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
