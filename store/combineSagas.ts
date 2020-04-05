import { all, fork } from 'redux-saga/effects';

import { aboutSagas } from './ducks/about';

import { contactSagas } from './ducks/contact';

function* rootSaga() {
  yield all([fork(aboutSagas), fork(contactSagas)]);
}

export default rootSaga;
