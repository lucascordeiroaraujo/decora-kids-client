import { all, fork } from 'redux-saga/effects';

import { HomeSagas } from './home';

function* rootSaga() {
  yield all([fork(HomeSagas)]);
}

export default rootSaga;
