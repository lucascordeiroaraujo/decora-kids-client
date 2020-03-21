import { createStore, applyMiddleware, compose, Store } from 'redux';

import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import reducers from './ducks';

import rootSaga from './sagas';

import ApplicationState from './interfaces';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['home'],
  timeout: 0
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [sagaMiddleware];

const createCompose = compose(applyMiddleware(...middlewares));

export default () => {
  const store: Store<ApplicationState> = createStore(
    persistedReducer,
    createCompose
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
