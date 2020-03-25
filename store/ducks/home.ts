import { createReducer } from 'reduxsauce';

import creator from '../util';

import { HomeState } from '../interfaces';

import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

/**
 * Action types & creators
 */
export const Types = {
  LOAD_REQUEST: 'LOAD_REQUEST_HOME',
  LOAD_SUCCESS: 'LOAD_SUCCESS_HOME',
  LOAD_FAILURE: 'LOAD_FAILURE_HOME'
};

export const Creators = {
  getRequest: creator(Types.LOAD_REQUEST),
  getSuccess: creator(Types.LOAD_SUCCESS),
  getFailure: creator(Types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: HomeState = {
  data: null,
  loading: true,
  error: false
};

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: false
});

const success = (state = INITIAL_STATE, action: any) => ({
  ...state,
  loading: false,
  data: action.payload
});

const failure = (state = INITIAL_STATE) => ({
  ...state,
  data: null,
  loading: false,
  error: true
});

/**
 * Sagas
 */
function* getHomeSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/9`);

    const result = yield response.json();

    yield put(Creators.getSuccess(result.acf));
  } catch (err) {
    console.error(err);
    yield put(Creators.getFailure(err));
  }
}

export function* HomeSagas() {
  yield all([takeLatest(Types.LOAD_REQUEST, getHomeSaga)]);
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: request,
  [Types.LOAD_SUCCESS]: success,
  [Types.LOAD_FAILURE]: failure
});
