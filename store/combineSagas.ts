import { all, fork } from 'redux-saga/effects';

import { homeSagas } from './ducks/home';

import { aboutSagas } from './ducks/about';

function* rootSaga() {
  yield all([fork(homeSagas), fork(aboutSagas)]);
}

export default rootSaga;
