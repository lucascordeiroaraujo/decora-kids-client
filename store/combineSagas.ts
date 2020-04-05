import { all, fork } from 'redux-saga/effects';

import { aboutSagas } from './ducks/about';

import { productsSagas } from './ducks/products';

import { contactSagas } from './ducks/contact';

function* rootSaga() {
  yield all([fork(aboutSagas), fork(productsSagas), fork(contactSagas)]);
}

export default rootSaga;
