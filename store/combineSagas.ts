import { all, fork } from 'redux-saga/effects';

import { homeSagas } from './ducks/home';

import { aboutSagas } from './ducks/about';

import { productsSagas } from './ducks/products';

import { blogSagas } from './ducks/blog';

import { contactSagas } from './ducks/contact';

function* rootSaga() {
  yield all([
    fork(homeSagas),
    fork(aboutSagas),
    fork(productsSagas),
    fork(blogSagas),
    fork(contactSagas)
  ]);
}

export default rootSaga;
