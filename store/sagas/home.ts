import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

import { Creators, Types } from '../ducks/home';

function* getHomeSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/7`);

    const result = yield response.json();

    yield put(Creators.getSuccess(result.acf));
  } catch (err) {
    console.error(err);
    yield put(Creators.getFailure(err));
  }
}

export default function* HomeSagas() {
  yield all([takeLatest(Types.LOAD_REQUEST, getHomeSaga)]);
}
