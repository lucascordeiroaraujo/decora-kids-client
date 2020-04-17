import { createReducer } from 'reduxsauce';

import creator from '../util';

import { homeState } from '../interfaces';

import { put, all, takeLatest } from 'redux-saga/effects';

import { TOKEN_INSTAGRAM } from '~/utils/config';

/**
 * Action types & creators
 */
export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST_HOME',
  LOAD_SUCCESS: 'LOAD_SUCCESS_HOME',
  LOAD_FAILURE: 'LOAD_FAILURE_HOME'
};

export const creators = {
  getRequest: creator(types.LOAD_REQUEST),
  getSuccess: creator(types.LOAD_SUCCESS),
  getFailure: creator(types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: homeState = {
  data: null,
  loading: true,
  error: false
};

interface payload {
  type: string;
  payload: any;
}

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: false
});

const success = (state = INITIAL_STATE, action: payload) => ({
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
    const response = yield fetch(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${TOKEN_INSTAGRAM}&count=6`
    );

    const result = yield response.json();

    yield put(creators.getSuccess(result.data));
  } catch (err) {
    console.error(err);

    yield put(creators.getFailure(err));
  }
}

export function* homeSagas() {
  yield all([takeLatest(types.LOAD_REQUEST, getHomeSaga)]);
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [types.LOAD_REQUEST]: request,
  [types.LOAD_SUCCESS]: success,
  [types.LOAD_FAILURE]: failure
});
