import { createReducer } from 'reduxsauce';

import creator from '../util';

import { contactState } from '../interfaces';

import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

/**
 * Action types & creators
 */
export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST_CONTACT',
  LOAD_SUCCESS: 'LOAD_SUCCESS_CONTACT',
  LOAD_FAILURE: 'LOAD_FAILURE_CONTACT'
};

export const creators = {
  getRequest: creator(types.LOAD_REQUEST),
  getSuccess: creator(types.LOAD_SUCCESS),
  getFailure: creator(types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: contactState = {
  data: null,
  loading: true,
  error: false
};

interface payload {
  type: string;
  payload: {
    address: {
      address: string;
      lat: string;
      lng: string;
    };
    phone: string;
    whatsapp: string;
    seo_title: string;
    seo_description: string;
    seo_image: string;
  };
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
function* getContactSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/11`);

    const result = yield response.json();

    yield put(creators.getSuccess(result.acf));
  } catch (err) {
    console.error(err);
    yield put(creators.getFailure(err));
  }
}

export function* contactSagas() {
  yield all([takeLatest(types.LOAD_REQUEST, getContactSaga)]);
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [types.LOAD_REQUEST]: request,
  [types.LOAD_SUCCESS]: success,
  [types.LOAD_FAILURE]: failure
});
