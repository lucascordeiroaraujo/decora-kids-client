import { all, fork } from 'redux-saga/effects';

import homeSagas from './home';

function* rootSaga() {
  yield all([fork(homeSagas)]);
}

export default rootSaga;
